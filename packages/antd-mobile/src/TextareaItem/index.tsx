import * as React from 'react';
import ATextareaItem from 'antd-mobile/lib/textarea-item';
import { withError, useTracker } from '@alitajs/tracker';
import { TextareaItemPropsType } from './PropsType';
import './index.less';

interface TextareaItemProps extends TextareaItemPropsType {
  forwardRef: any;
}

export const TextareaItem: React.FC<TextareaItemProps> = (props) => {
  const { onChange, onBlur, onFocus, onErrorClick, forwardRef, ext, ...other } = props;

  const log = useTracker(TextareaItem.displayName, {
    ext,
  });

  return (
    <ATextareaItem
      {...other}
      ref={forwardRef}
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
      onErrorClick={() => {
        onErrorClick && onErrorClick();
        log('onErrorClick');
      }}
    ></ATextareaItem>
  );
};

TextareaItem.displayName = 'TextareaItem';

export default withError(TextareaItem, { forwardRef: true });
