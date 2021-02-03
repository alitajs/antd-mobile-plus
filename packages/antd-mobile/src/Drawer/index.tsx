import * as React from 'react';
import ADrawer from 'antd-mobile/lib/drawer';
import { withError, useTracker } from '@alitajs/tracker';
import { DrawerPropsType } from './PropsType';
import './index.less';

export const Drawer: React.FC<DrawerPropsType> = (props) => {
  const { onOpenChange, ext, ...other } = props;

  const log = useTracker(Drawer.displayName, {
    ext,
  });

  return (
    <ADrawer
      {...other}
      onOpenChange={(e) => {
        onOpenChange && onOpenChange(e);
        log('onOpenChange');
      }}
    ></ADrawer>
  );
};

Drawer.displayName = 'Drawer';

export default withError(Drawer);
