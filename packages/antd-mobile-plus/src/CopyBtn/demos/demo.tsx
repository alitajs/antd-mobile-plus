import React, { FC } from 'react';
import { CopyBtn } from '@alitajs/antd-mobile-plus';

interface DemoProps {};

const btnAttr = {
  // 支持antd和原生按钮属性
  type: "default",
};

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <CopyBtn value="需要复制的值" text="点我复制" btnAttr={btnAttr} />
    </div>
  );
};

export default Demo;
