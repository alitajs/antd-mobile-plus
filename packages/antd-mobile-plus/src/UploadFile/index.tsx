import React, { FC, useImperativeHandle, forwardRef, Ref } from 'react';
import SwipeAction from 'antd-mobile/lib/swipe-action';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { getTypeWithFileName } from './utils';
import {
  UploadEditType,
  UploadFileDataType,
  UploadFileDisabelType,
} from './PropsType';
import { useSetState, useMount } from 'ahooks';
import './index.less';

const prefixCls = 'alita-upload-file';

const UploadFile: FC<UploadEditType | UploadFileDisabelType> = forwardRef(
  (props, ref: any) => {
    const {
      initialData = [],
      onDelete,
      onPreview,
      onClick,
      disable = false,
      accept = '*/*',
      multiple = true,
      title = '附件上传',
      onRenderTips,
    } = props as any;
    const [state, setState] = useSetState<{
      data: UploadFileDataType[];
    }>({
      data: initialData,
    });
    const log = useTracker(UploadFile.displayName, {});
    useImperativeHandle(ref, () => {
      return {
        data: () => {
          return state.data;
        },
      };
    });

    const onDeletePress = (file: UploadFileDataType, index: number) => {
      const { data } = state;
      data.splice(index, 1);
      setState({
        data: [...data],
      });
      onDelete && onDelete(index, file);
    };

    const rightAction = (file: UploadFileDataType, index: number) => {
      return [
        {
          text: '删除',
          className: `${prefixCls}-action-delete`,
          onPress: () => {
            onDeletePress(file, index);
          },
        },
        {
          text: '预览',
          className: `${prefixCls}-action-preview`,
          onPress: () => {
            onPreview && onPreview(index, file);
          },
        },
      ];
    };

    const addFileToData = (e: any) => {
      const files: File[] = Array.from(e.target.files);
      const data = files.map(
        (item: File): UploadFileDataType => {
          return {
            type: getTypeWithFileName(item),
            name: item.name,
            id: `${item.lastModified}`,
            file: item,
          };
        },
      );
      setState({
        data: state.data.concat(data),
      });
    };

    const UploadLoadButton = () => {
      return disable ? (
        <></>
      ) : (
        <div className={`${prefixCls}-extra`}>
          <input
            id={'id'}
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
          right={rightAction(item, index)}
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
      <div className={prefixCls} ref={ref}>
        <div className={`${prefixCls}-card`}>
          <div className={`${prefixCls}-header`}>
            <div className={`${prefixCls}-title`}>{title}</div>
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
  },
);

UploadFile.displayName = 'UploadFile';
export default withError(UploadFile, {
  forwardRef: true,
});
