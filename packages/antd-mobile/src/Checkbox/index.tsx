import * as React from 'react';
import ACheckbox from 'antd-mobile/lib/checkbox';
import { OnChangeParams } from 'antd-mobile/es/checkbox/PropsType';
import { withError, useTracker } from '@alitajs/tracker';
import { CheckboxPropsType } from './PropsType';
import './index.less';

interface CheckboxFC<T> extends React.FC<T> {
  CheckboxItem?: typeof ACheckbox.CheckboxItem;
  AgreeItem?: typeof ACheckbox.CheckboxItem;
}

export const Checkbox: CheckboxFC<CheckboxPropsType> = (props) => {
  const { ext, onChange, ...reset } = props;

  const log = useTracker(Checkbox.displayName, {
    ext,
  });

  return (
    <ACheckbox
      onChange={(params: OnChangeParams) => {
        onChange && onChange(params);
        log('onChange');
      }}
      {...reset}
    ></ACheckbox>
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.CheckboxItem = ACheckbox.CheckboxItem;
Checkbox.AgreeItem = ACheckbox.AgreeItem;
export default withError(Checkbox);
