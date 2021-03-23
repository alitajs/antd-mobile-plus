/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-23 14:07:00
 */
import React, { FC } from 'react';
import { TextGroup } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const textData = [
  {
    key: "001",
    text: "Fish官网",
    onClick: () =>
      window.open("https://fish.iwhalecloud.com/fish-show/", "_blank")
  },
  {
    key: "002",
    text: "技术平台官网",
    onClick: () => window.open("https://edu.iwhalecloud.com/", "_blank")
  },
  {
    key: "003",
    text: "公司官网",
    onClick: () => window.open("https://www.iwhalecloud.com/", "_blank")
  }
];

const Demo: FC<DemoProps> = (props) => {
  return (
    <TextGroup data={textData} />
  );
};

export default Demo;
