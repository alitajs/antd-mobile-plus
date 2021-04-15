import React, { FC } from 'react';
import { QRCode } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <QRCode content="https://www.baidu.com/" />
    </div>
  );
};

export default Demo;
