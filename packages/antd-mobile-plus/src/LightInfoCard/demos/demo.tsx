/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-22 16:54:51
 */
import React, { FC } from 'react';
import { LightInfoCard } from '@alitajs/antd-mobile-plus';
import appleSvg from '../assets/apple.svg';
import androidSvg from '../assets/android.svg';


interface DemoProps {}

const metaData = [{
  title: "年龄",
  value: "24岁"
}, {
  title: "出生日期",
  value: "1994年7月12日"
}, {
  title: "名族",
  value: "汉"
}, {
  title: "籍贯",
  value: "江苏"
}, {
  title: "身份证号",
  value: "44020199829191222"
}]
const metaImgs = [
  <img alt="" src={appleSvg} style={{ width: "3rem", height: "3rem" }} />,
  <img alt="" src={androidSvg} style={{ width: "3rem", height: "3rem" }} />
]

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      基本的
      <br />
      <br />
      <LightInfoCard
        title="王晨曦"
        dataSource={metaData}
      />
      <br />
        图片放左边，带尾部的
      <br />
      <br />
      <LightInfoCard
        title="王晨曦"
        dataSource={metaData}
        imgPlacement="left"
        imgs={metaImgs}
        onClickImg={() => console.log("王晨曦")}
        extra={["暂住人口对照表", " 2018-08-16 "]}
      />
      <br />
        图片放右边
      <br />
      <br />
      <LightInfoCard
        title="王晨曦"
        dataSource={metaData}
        imgPlacement="right"
        imgs={metaImgs}
        onClickImg={() => console.log("王晨曦")}
      />
      <br />
        没有图片的
      <br />
      <br />
      <LightInfoCard
        title="王晨曦"
        dataSource={metaData}
        imgPlacement="right"
      />
    </div>
  );
};

export default Demo;
