/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-23 10:49:23
 */
import React, { FC } from 'react';
import { RibbonColor } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        border: "1px solid #ccc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <RibbonColor
        height={30}
        range={30}
        text="彩带组件"
        style={{
          color: "#fff",
          background: "linear-gradient(to right, red , yellow)",
        }}
      />
    </div>
  );
};

export default Demo;
