import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Card from '../Card';
import { ApprovalDisableType, ApprovalFlowType } from './PropsType';
import './index.less';

const { Header, Footer, Body } = Card;

const prefixCls = 'alita-approvalflow';
const ApprovalFlow: FC<ApprovalFlowType | ApprovalDisableType> = ({
  title = '',
}) => {
  const log = useTracker(ApprovalFlow.displayName, {});
  return (
    <Card>
      {title ? <Header title={title}></Header> : <></>}
      <Body></Body>
      <Footer type="single"></Footer>
    </Card>
  );
};

ApprovalFlow.displayName = 'ApprovalFlow';
ApprovalFlow.defaultProps = {};

export default withError(ApprovalFlow);
