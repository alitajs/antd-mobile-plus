import * as React from 'react';
import AButton from 'antd-mobile/lib/button';
import { withError, useTracker } from '@alitajs/tracker';
import { ButtonPropsType } from './PropsType';
import './index.less';

export const Button: React.FC<ButtonPropsType> = (props) => {
  const { onClick, ext, ...other } = props;

  const log = useTracker(Button.displayName, {
    ext,
  });

  return (
    <AButton
      {...other}
      onClick={(e) => {
        onClick && onClick(e);
        log('onClick');
      }}
    >
    </AButton>
  );
};

Button.displayName = 'Button';


export default withError(Button);
