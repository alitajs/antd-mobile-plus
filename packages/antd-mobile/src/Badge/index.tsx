import * as React from 'react';
import ABadge from 'antd-mobile/lib/badge';
import { withError, useTracker } from '@alitajs/tracker';
import { BadgePropsType } from './PropsType';
import './index.less';

export const Badge: React.FC<BadgePropsType> = (props) => {
  return (
    <ABadge
      {...props}
    >
    </ABadge>
  );
};

Badge.displayName = 'Badge';


export default withError(Badge);
