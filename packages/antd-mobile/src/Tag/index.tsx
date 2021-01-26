import * as React from 'react';
import ATag from 'antd-mobile/lib/tag';
import { withError, useTracker } from '@alitajs/tracker';
import { TagPropsType } from './PropsType';
import './index.less';

export const Tag: React.FC<TagPropsType> = (props) => {

  const { onChange, onClose, afterClose, ext, ...other } = props;

  const log = useTracker(Tag.displayName, {
    ext,
  });

  return (
    <ATag
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onClose={(e) => {
        onClose && onClose(e);
        log('onClose');
      }}
      afterClose={(e) => {
        afterClose && afterClose(e);
        log('afterClose');
      }} 
    >
    </ATag>
  );
};

Tag.displayName = 'Tag';

export default withError(Tag);
