import React, { FC } from 'react';
import { GradientProgress } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <GradientProgress
        width={100}
        height={200}
        percent={50}
        backgroundColor="#999"
        divisionColor="#000"
        linearGradient={["rgba(255,0,0,0)", "rgba(255,0,0,1)"]}
      />
      <br />
      <GradientProgress
        width={100}
        height={200}
        percent={50}
        backgroundColor="#999"
        divisionColor="#000"
      />
    </div>
  );
};

export default Demo;
