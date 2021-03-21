/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-19 15:21:12
 */
import React, { FC } from 'react';
import { Watermark } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <Watermark
      rotation={Math.PI / 6}
      fontSize={14}
      lineHeight={21}
      fontFamily="微软雅黑"
      fontColor="black"
      gap={20}
      content={"这是一个友好的水印\n仅限于测试"}
      style={{ border: "1px solid #ddd" }}
    >
      <div
        style={{ color: "blue", paddingTop: 100, paddingLeft: 40, height: 200 }}
      >
        这是一个测试内容
    </div>
    </Watermark>
  );
};

export default Demo;
