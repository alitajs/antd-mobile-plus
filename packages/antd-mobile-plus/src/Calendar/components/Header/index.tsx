import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface HeaderProps {}


const prefixCls = 'alita-header';
const Header: FC<HeaderProps> = (props) => {
  return <div className={prefixCls}></div>;
};

Header.displayName = 'Header';
export default withError(Header);
