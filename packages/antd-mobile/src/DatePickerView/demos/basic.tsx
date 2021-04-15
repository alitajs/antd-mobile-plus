import React, { FC } from 'react';
import { DatePickerView } from '@alitajs/antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
import { useSetState } from 'ahooks';

interface DatePickerViewExmpleProps {}

const DatePickerViewExmple: FC<DatePickerViewExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    value: '',
  });
  const onChange = (value) => {
    console.log(value);
    setState({ value });
  };
  const onValueChange = (...args) => {
    console.log(args);
  };
  return (
    <div>
      <div style={{ padding: '0.2rem' }}>Start datetime</div>
      <DatePickerView
        value={state.value}
        onChange={onChange}
        onValueChange={onValueChange}
      />
      <div style={{ padding: '0.2rem' }}>End datetime</div>
      <DatePickerView
        locale={enUs}
        value={state.value}
        onChange={onChange}
        onValueChange={onValueChange}
      />
    </div>
  );
};

export default DatePickerViewExmple;
