import * as React from 'react';
import AStepper from 'antd-mobile/lib/stepper';
import { withError, useTracker } from '@alitajs/tracker';
import { StepperPropsType } from './PropsType';
import './index.less';

export const Stepper: React.FC<StepperPropsType> = (props) => {
  const { onChange, ext, ...other } = props;

  const log = useTracker(Stepper.displayName, {
    ext,
  });

  return (
    <AStepper
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
    >
    </AStepper>
  );
};

Stepper.displayName = 'Stepper';

export default withError(Stepper);
