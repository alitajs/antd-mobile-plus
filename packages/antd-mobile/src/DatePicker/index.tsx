import * as React from 'react';
import ADatePicker from 'antd-mobile/lib/date-picker';
import { withError, useTracker } from '@alitajs/tracker';
import { DatePickerPropsType } from './PropsType';
import './index.less';

export const DatePicker: React.FC<DatePickerPropsType> = (props) => {
  const {
    ext,
    onChange,
    onValueChange,
    onOk,
    onVisibleChange,
    onDismiss,
    ...reset
  } = props;

  const log = useTracker(DatePicker.displayName, {
    ext,
  });

  return (
    <ADatePicker
      onChange={(value: Date) => {
        onChange && onChange(value);
        log('onChange');
      }}
      onValueChange={(...i) => {
        onValueChange && onValueChange(...i);
        log('onValueChange');
      }}
      onDismiss={(...i) => {
        onDismiss && onDismiss(...i);
        log('onDismiss');
      }}
      onOk={(...i) => {
        onOk && onOk(...i);
        log('onOk');
      }}
      onVisibleChange={(...i) => {
        onVisibleChange && onVisibleChange(...i);
        log('onVisibleChange');
      }}
      {...reset}
    ></ADatePicker>
  );
};

DatePicker.displayName = 'DatePicker';

export default withError(DatePicker);
