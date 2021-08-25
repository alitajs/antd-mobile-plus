import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface MonthPanelProps {}


const prefixCls = 'alita-monthpanel';
const MonthPanel: FC<MonthPanelProps> = (props) => {
  return <div className={prefixCls}></div>;
};

MonthPanel.displayName = 'MonthPanel';
export default withError(MonthPanel);
