import * as React from 'react';
import AImagePicker from 'antd-mobile/lib/image-picker';
import { withError, useTracker } from '@alitajs/tracker';
import { ImagePickerPropsType } from './PropsType';
import './index.less';

export const ImagePicker: React.FC<ImagePickerPropsType> = (props) => {
  const {
    onChange,
    onImageClick,
    onAddImageClick,
    onFail,
    ext,
    ...other
  } = props;

  const log = useTracker(ImagePicker.displayName, {
    ext,
  });

  return (
    <AImagePicker
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onImageClick={(e) => {
        onImageClick && onImageClick(e);
        log('onImageClick');
      }}
      onAddImageClick={(e) => {
        onAddImageClick && onAddImageClick(e);
        log('onAddImageClick');
      }}
      onFail={(e) => {
        onFail && onFail(e);
        log('onFail');
      }}
    ></AImagePicker>
  );
};

ImagePicker.displayName = 'ImagePicker';

export default withError(ImagePicker);
