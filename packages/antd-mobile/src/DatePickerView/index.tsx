import * as React from 'react';
import ADatePickerView from 'antd-mobile/lib/date-picker-view';
import { withError, useTracker } from '@alitajs/tracker';
import { DatePickerViewPropsType } from './PropsType';
import './index.less';

export const DatePickerView: React.FC<DatePickerViewPropsType> = (props) => {
  const { onValueChange, onChange, ext, ...reset } = props;

  const log = useTracker(DatePickerView.displayName, {
    ext,
  });

  return (
    <ADatePickerView
      onChange={(value: Date) => {
        onChange && onChange(value);
        log('onChange');
      }}
      onValueChange={(...i) => {
        onValueChange && onValueChange(...i);
        log('onValueChange');
      }}
      {...reset}
    ></ADatePickerView>
  );
};

DatePickerView.displayName = 'DatePickerView';
export default withError(DatePickerView);
