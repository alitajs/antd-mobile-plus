import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface FlowItemProps {}


const prefixCls = 'alita-flowitem';
const FlowItem: FC<FlowItemProps> = (props) => {
  return <div className={prefixCls}></div>;
};

FlowItem.displayName = 'FlowItem';
export default withError(FlowItem);
