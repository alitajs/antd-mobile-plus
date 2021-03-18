import React, { FC } from 'react';
import { Capsule } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <div
        style={{
          marginTop: '1rem',
          padding: '0.2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Capsule text="胶囊按钮" size="sm"></Capsule>
        <Capsule text="胶囊按钮" size="md"></Capsule>
        <Capsule text="胶囊按钮" size="lg"></Capsule>
      </div>
      <div
        style={{
          padding: '0.2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Capsule text="胶囊按钮" size="sm" type="default"></Capsule>
        <Capsule text="胶囊按钮" size="md" type="default"></Capsule>
        <Capsule text="胶囊按钮" size="lg" type="default"></Capsule>
      </div>
      <div
        style={{
          padding: '0.2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Capsule text="胶囊按钮" size="sm" type="primary"></Capsule>
        <Capsule text="胶囊按钮" size="md" type="primary"></Capsule>
        <Capsule text="胶囊按钮" size="lg" type="primary"></Capsule>
      </div>
    </div>
  );
};

export default Demo;
