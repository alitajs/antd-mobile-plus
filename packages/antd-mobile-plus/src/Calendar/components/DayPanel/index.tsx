import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface DayPanelProps {}


const prefixCls = 'alita-daypanel';
const DayPanel: FC<DayPanelProps> = (props) => {
  return <div className={prefixCls}></div>;
};

DayPanel.displayName = 'DayPanel';
export default withError(DayPanel);
