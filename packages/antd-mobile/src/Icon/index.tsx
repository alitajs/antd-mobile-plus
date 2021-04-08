import * as React from 'react';
import AIcon from 'antd-mobile/lib/icon';
import { withError, useTracker } from '@alitajs/tracker';
import { IconPropsType } from './PropsType';
import './index.less';

export const Icon: React.FC<IconPropsType> = (props) => {
  const { ext, onClick, ...reset } = props;
  const log = useTracker(Icon.displayName, {
    ext,
  });
  return (
    <AIcon
      onClick={(...e) => {
        onClick && onClick(...e);
        log('onClick');
      }}
      {...reset}
    ></AIcon>
  );
};

Icon.displayName = 'Icon';
export default withError(Icon);
