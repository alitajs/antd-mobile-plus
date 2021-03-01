import React, { FC } from 'react';
import { ToolBar } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div style={{ marginTop: 20 }}>
      <ToolBar
        data={[
          {
            text: '辅助操作',
            type: 'primary',
            onPress: () => {
              console.log('辅助操作点击');
            },
            id: '01',
          },
          {
            text: '主要操作',
            type: 'default',
            onPress: () => {
              console.log('主要操作');
            },
            id: '02',
          },
          {
            text: '不可操作',
            type: 'disable',
            onPress: () => {
              console.log('主要操作');
            },
            id: '03',
          },
        ]}
      />
    </div>
  );
};

export default Demo;
