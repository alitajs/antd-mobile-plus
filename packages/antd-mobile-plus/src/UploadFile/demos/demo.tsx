import React, { FC } from 'react';
import { UploadFile } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div style={{ padding: '0.2rem' }}>
      <UploadFile />
    </div>
  );
};

export default Demo;
