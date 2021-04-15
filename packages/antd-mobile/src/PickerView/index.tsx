import * as React from 'react';
import APickerView from 'antd-mobile/lib/picker-view';
import { withError, useTracker } from '@alitajs/tracker';
import { PickerViewPropsType } from './PropsType';
import './index.less';

export const PickerView: React.FC<PickerViewPropsType> = (props) => {
  const { ext, onChange, onScrollChange, ...reset } = props;

  const log = useTracker(PickerView.displayName, {
    ext,
  });

  return (
    <APickerView
      {...reset}
      onChange={(...e) => {
        onChange && onChange(...e);
        log('onChange');
      }}
      onScrollChange={(...e) => {
        onScrollChange && onScrollChange(...e);
        log('onScrollChange');
      }}
    ></APickerView>
  );
};

PickerView.displayName = 'PickerView';

export default withError(PickerView);
