import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';
Y__Template__;

const _ComponentsName_: FC<__Props__> = (props) => {
  const log = useTracker(_ComponentsName_.displayName, {});
  return <div className={prefixCls}></div>;
};

_ComponentsName_.displayName = '_ComponentsName_';
export default withError(_ComponentsName_);
