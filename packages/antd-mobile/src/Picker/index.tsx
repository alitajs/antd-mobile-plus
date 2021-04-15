import * as React from 'react';
import APicker from 'antd-mobile/lib/picker';
import { withError, useTracker } from '@alitajs/tracker';
import { PickerPropsType } from './PropsType';
import './index.less';

export const Picker: React.FC<PickerPropsType> = (props) => {
  const { ext, ...reset } = props;

  const log = useTracker(Picker.displayName, {
    ext,
  });

  return (
    <APicker
      {...reset}
    ></APicker>
  );
};

Picker.displayName = 'Picker';

export default withError(Picker);
