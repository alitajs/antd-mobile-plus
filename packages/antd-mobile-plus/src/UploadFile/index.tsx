import React, { FC, useImperativeHandle, useMemo } from 'react';
import SwipeAction from 'antd-mobile/lib/swipe-action';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { useSetState } from 'ahooks';
import useCompleteLocale from '../LocaleProvider/useCompleteLocale';
import { getTypeWithFileName } from './utils';
import {
  UploadEditType,
  UploadFileDataType,
  UploadFileDisabelType,
  UploadFileType,
} from './PropsType';
import './index.less';

const prefixCls = 'alita-upload-file';

type UploadType<T> = T extends true
  ? UploadFileDisabelType
  : T extends false
  ? UploadEditType
  : never;

const UploadFile: FC<UploadType<UploadFileType['disable']>> = (props) => {
  const {
    data = [],
    onDelete,
    onPreview,
    onClick,
    disable = false,
    accept = '*/*',
    multiple = true,
    title,
    onRenderTips,
    forwardRef,
    maxLength = Infinity,
    hidePreview = false,
    hideDelete = false,
    onUploadFile,
  } = props as any;
  const [state, setState] = useSetState<{
    data: UploadFileDataType[];
  }>({
    data,
  });
  const lang = useCompleteLocale();
  const log = useTracker(UploadFile.displayName, {});
  useImperativeHandle(forwardRef, () => {
    return {
      data: () => {
        return state.data;
      },
    };
  });

  useMemo(() => {
    setState({
      data,
    });
  }, [JSON.stringify(data)]);

  const onDeletePress = (file: UploadFileDataType, index: number) => {
    const { data } = state;
    data.splice(index, 1);
    setState({
      data: [...data],
    });
    onDelete && onDelete(index, file);
  };

  const rightActionButtons = (file: UploadFileDataType, index: number) => {
    const deleteAction = {
      text: '删除',
      className: `${prefixCls}-action-delete`,
      onPress: () => {
        log('onDeletePress');
        onDeletePress(file, index);
      },
    };
    const previewAction = {
      text: '预览',
      className: `${prefixCls}-action-preview`,
      onPress: () => {
        log('onPreview');
        onPreview && onPreview(index, file);
      },
    };
    const actions = [];
    if (!hideDelete) {
      actions.push(deleteAction);
    }
    if (!hidePreview) {
      actions.push(previewAction);
    }
    return actions;
  };

  const addFileToData = (e: any) => {
    const files: File[] = Array.from(e.target.files);
    let data = files.map(
      (item: File, index: number): UploadFileDataType => {
        return {
          type: getTypeWithFileName(item),
          name: item.name,
          id: `${item.lastModified}-${index}`,
          file: item,
        };
      },
    );

    const allLength = state.data.length + data.length;
    if (allLength > maxLength) {
      data.splice(data.length - (allLength - maxLength), allLength - maxLength);
    }
    const tempData = state.data.concat(data);
    setState({
      data: [...tempData],
    });

    log('onUploadFile');
    onUploadFile && onUploadFile(data);
  };

  const UploadLoadButton = () => {
    return disable || state.data.length >= maxLength ? (
      <></>
    ) : (
      <div className={`${prefixCls}-extra`}>
        <input
          type="file"
          accept={accept}
          onChange={addFileToData}
          multiple={multiple}
        />
      </div>
    );
  };

  const FileItem = ({
    item,
    index,
  }: {
    item: UploadFileDataType;
    index: number;
  }) => {
    return (
      <SwipeAction
        autoClose
        disabled={disable}
        right={rightActionButtons(item, index)}
      >
        <div className={`${prefixCls}-fileitem`} onClick={onClick}>
          <i
            className={classnames(`${prefixCls}-icon`, {
              [`${prefixCls}-icon-docx`]: item.type === 'doc',
              [`${prefixCls}-icon-xlsx`]: item.type === 'excel',
              [`${prefixCls}-icon-img`]: item.type === 'image',
              [`${prefixCls}-icon-ppt`]: item.type === 'ppt',
              [`${prefixCls}-icon-pdf`]: item.type === 'pdf',
              [`${prefixCls}-icon-other`]: item.type === 'other',
            })}
          ></i>
          <div className={`${prefixCls}-text`}>
            <div>{item.name}</div>
            {onRenderTips ? onRenderTips(item) : <></>}
          </div>
        </div>
      </SwipeAction>
    );
  };

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-card`}>
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>
            {title ?? lang.UploadFile.title}
          </div>
          <UploadLoadButton />
        </div>
        <div hidden={state.data.length === 0} className={`${prefixCls}-body`}>
          {state.data.map((item, index) => {
            return <FileItem key={`${item.id}`} item={item} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

UploadFile.displayName = 'UploadFile';
export default withError(UploadFile, {
  forwardRef: true,
});
