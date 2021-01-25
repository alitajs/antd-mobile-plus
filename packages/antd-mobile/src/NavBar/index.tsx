import * as React from 'react';
import ANavBar from 'antd-mobile/lib/nav-bar';
import { withError, useTracker } from '@alitajs/tracker';
import { NavBarPropsType } from './PropsType';
import './index.less';

export const NavBar: React.FC<NavBarPropsType> = (props) => {
  const { onLeftClick, ext, ...other } = props;

  const log = useTracker(NavBar.displayName, {
    ext,
  });

  return (
    <ANavBar
      {...other}
      onLeftClick={(e) => {
        onLeftClick && onLeftClick(e);
        log('onLeftClick');
      }}
    >
    </ANavBar>
  );
};

NavBar.displayName = 'NavBar';


export default withError(NavBar);
