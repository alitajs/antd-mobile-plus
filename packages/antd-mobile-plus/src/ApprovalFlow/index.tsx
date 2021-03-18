import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { ApprovalDisableType, ApprovalFlowType } from './PropsType';
import './index.less';

const prefixCls = 'alita-approvalflow';
const ApprovalFlow: FC<ApprovalFlowType | ApprovalDisableType> = (props) => {
  const log = useTracker(ApprovalFlow.displayName, {});
  return <div className={prefixCls}></div>;
};

ApprovalFlow.displayName = 'ApprovalFlow';
ApprovalFlow.defaultProps = {};

export default withError(ApprovalFlow);
