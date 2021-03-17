import React, { FC, useImperativeHandle, forwardRef, useRef } from 'react';
import SwipeAction from 'antd-mobile/lib/swipe-action';
import { withError, useTracker } from '@alitajs/tracker';
import { getTypeWithFileName } from './utils';
import Card from '../Card';
import { UploadFileType, UploadFileDataType, FileType } from './PropsType';
import { useSetState, useSet, useMount } from 'ahooks';
import './index.less';

const prefixCls = 'alita-upload-file';

const UploadFile: FC<UploadFileType> = forwardRef((props, ref) => {
  const {
    initialData = [],
    onDelete,
    onRowClick,
    onPreview,
    disable = false,
    accept = '*/*',
    multiple = true,
    title = '附件上传',
  } = props;
  const [state, setState] = useSetState<{
    data: UploadFileDataType[];
  }>({
    data: initialData,
  });
  const log = useTracker(UploadFile.displayName, {});
  useImperativeHandle(ref, () => ({
    data: () => {
      return state.data;
    },
  }));

  const rightAction = (file: UploadFileDataType, index: number) => {
    return [
      {
        text: '删除',
        style: { backgroundColor: '#f40', color: '#fff' },
        onPress: () => {
          const { data } = state;
          const temp = data.splice(index, 1);
          console.log(data);
          setState({
            data: [...temp],
          });
          onDelete && onDelete(index, file);
        },
      },
      {
        text: '预览',
        style: { backgroundColor: '#f00', color: '#fff' },
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

  const FileItem = ({ item, index }) => {
    const div = useRef(null);
    useMount(() => {
      console.log(div);
    });
    return (
      <SwipeAction ref={div} autoClose right={rightAction(item, index)}>
        <div className={`${prefixCls}-fileitem`}>{item.name}</div>;
      </SwipeAction>
    );
  };

  return (
    <div className={prefixCls}>
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
});

UploadFile.displayName = 'UploadFile';
export default withError(UploadFile);
