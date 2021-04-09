import * as React from 'react';
import AInputItem from 'antd-mobile/lib/input-item';
import { withError, useTracker } from '@alitajs/tracker';
import { InputItemPropsType } from './PropsType';
import './index.less';

export const InputItem: React.FC<InputItemPropsType & { forwardRef?: any }> = (
  props,
) => {
  const {
    ext,
    forwardRef,
    onChange,
    onFocus,
    onBlur,
    onVirtualKeyboardConfirm,
    ...reset
  } = props;

  const log = useTracker(InputItem.displayName, { ext });

  return (
    <AInputItem
      onChange={(...e) => {
        onChange && onChange(...e);
        log('onChange');
      }}
      onFocus={(...e) => {
        onFocus && onFocus(...e);
        log('onFocus');
      }}
      onBlur={(...e) => {
        onBlur && onBlur(...e);
        log('onBlur');
      }}
      onVirtualKeyboardConfirm={(...e) => {
        onVirtualKeyboardConfirm && onVirtualKeyboardConfirm(...e);
        log('onVirtualKeyboardConfirm');
      }}
      ref={forwardRef}
      {...reset}
    ></AInputItem>
  );
};

InputItem.displayName = 'InputItem';

export default withError(InputItem, { forwardRef: true });
