import React, { FC } from 'react';
import { PickerView, WhiteSpace } from '@alitajs/antd-mobile';
import { seasons, season, province } from './data';
import { useSetState } from 'ahooks';

interface PickerViewExmpleProps {}

const PickerViewExmple: FC<PickerViewExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    value: null,
  });
  const onChange = (value) => {
    console.log(value);
    setState({
      value,
    });
  };
  const onScrollChange = (value) => {
    console.log(value);
  };
  return (
    <div>
      <PickerView
        onChange={onChange}
        onScrollChange={onScrollChange}
        value={state.value}
        data={seasons}
        cascade={false}
      />
      <WhiteSpace />
      <WhiteSpace />
      <PickerView data={season} cascade={false} />
      <WhiteSpace />
      <WhiteSpace />
      <PickerView data={province} value={['02', '02-1', '02-1-1']} />
    </div>
  );
};

export default PickerViewExmple;
