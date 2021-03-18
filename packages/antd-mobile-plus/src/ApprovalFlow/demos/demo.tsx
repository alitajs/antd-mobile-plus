import React, { FC } from 'react';
import { ApprovalFlow } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <ApprovalFlow></ApprovalFlow>
    </div>
  );
};

export default Demo;
