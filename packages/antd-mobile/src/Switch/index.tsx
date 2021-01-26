import * as React from 'react';
import ASwitch from 'antd-mobile/lib/switch';
import { withError, useTracker } from '@alitajs/tracker';
import { SwitchPropsType } from './PropsType';
import './index.less';

export const Switch: React.FC<SwitchPropsType> = (props) => {

  const { onChange, onClick, ext, ...other } = props;

  const log = useTracker(Switch.displayName, {
    ext,
  });

  return (
    <ASwitch
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onClick={(e) => {
        onClick && onClick(e);
        log('onClick');
      }}
    >
    </ASwitch>
  );
};

Switch.displayName = 'Switch';

export default withError(Switch);
