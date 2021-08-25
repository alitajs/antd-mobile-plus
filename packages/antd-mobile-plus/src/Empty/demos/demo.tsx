import React, { FC } from 'react';
import { Empty } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <div style={{ height: '3vh' }}></div>
      <Empty type="normal" style={{ height: '40vh' }} />
      <div style={{ height: '3vh' }}></div>
      <Empty type="noMessage" style={{ height: '40vh' }} />
      <div style={{ height: '3vh' }}></div>
      <Empty type="network" style={{ height: '40vh' }} />
      <div style={{ height: '3vh' }}></div>
      <Empty type="denied" style={{ height: '40vh' }} />
      <div style={{ height: '3vh' }}></div>
      <Empty type="empty" style={{ height: '40vh' }} />
      <div style={{ height: '3vh' }}></div>
      <Empty
        type="normal"
        style={{ height: '40vh' }}
        renderHeader={<div style={{ color: '#f40' }}>我是自定义头部</div>}
        renderFooter={<div style={{ color: '#f40' }}>我是自定义底部</div>}
      />
      <div style={{ height: '3vh' }}></div>
    </div>
  );
};

export default Demo;
