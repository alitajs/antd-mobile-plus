import * as React from 'react';
import ATextareaItem from 'antd-mobile/lib/textarea-item';
import { withError, useTracker } from '@alitajs/tracker';
import { TextareaItemPropsType } from './PropsType';
import './index.less';

export const TextareaItem: React.FC<TextareaItemPropsType> = (props) => {
  const { onChange, onBlur, onFocus, onErrorClick, ext, ...other } = props;

  const log = useTracker(TextareaItem.displayName, {
    ext,
  });

  return (
    <ATextareaItem
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onBlur={(e) => {
        onBlur && onBlur(e);
        log('onBlur');
      }}
      onFocus={(e) => {
        onFocus && onFocus(e);
        log('onFocus');
      }}
      onErrorClick={(e) => {
        onErrorClick && onErrorClick(e);
        log('onErrorClick');
      }}
    ></ATextareaItem>
  );
};

TextareaItem.displayName = 'TextareaItem';

export default withError(TextareaItem);
