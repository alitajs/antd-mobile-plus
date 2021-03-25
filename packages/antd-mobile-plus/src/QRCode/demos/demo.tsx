/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-19 15:21:12
 */
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
