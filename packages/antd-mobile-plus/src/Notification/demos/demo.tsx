/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-23 16:39:51
 */
import React, { FC } from 'react';
import { Notification } from '@alitajs/antd-mobile-plus';
import dingdingSvg from '../assets/dingding.svg';
import starOnSvg from '../assets/star-on.svg';
import tagSvg from '../assets/tag.svg';

interface DemoProps {}

const iconStyle = {
  width: 10,
  height: 10,
}

const thumbColorRed: React.CSSProperties = {
  width: 22,
  height: 22,
  lineHeight: "22px",
  borderRadius: "50%",
  background: "#fe5d58",
  textAlign: "center",
}

const thumbColorBlue: React.CSSProperties = {
  width: 22,
  height: 22,
  lineHeight: "22px",
  borderRadius: "50%",
  background: "#3391e5",
  textAlign: "center",
}

const thumbColorYellow: React.CSSProperties = {
  width: 22,
  height: 22,
  lineHeight: "22px",
  borderRadius: "50%",
  background: "yellow",
  textAlign: "center",
}

const Demo: FC<DemoProps> = (props) => {
  const data = [{
    title: "邮件通知",
    subTitle: "您收到了14份新年周报",
    thumb: <div style={thumbColorRed}><img style={iconStyle} src={tagSvg} alt='' /></div>,
    extra: "2017-07-09",
    arrow: "horizontal",
    multipleLine: true,
    onClick: () => { },
  }, {
    title: "面试通知",
    subTitle: "你推荐的 曲妮妮 已通过第三轮面试",
    thumb: <div style={thumbColorBlue}><img style={iconStyle} src={dingdingSvg} alt='' /></div>,
    extra: "2017-07-09",
    arrow: "horizontal",
    multipleLine: true,
    onClick: () => { },
  }, {
    title: "系统通知",
    subTitle: "左侧图标用于区分不同的类型",
    thumb: <div style={thumbColorYellow}><img style={iconStyle} src={starOnSvg} alt='' /></div>,
    extra: "2017-09-09",
    arrow: "horizontal",
    multipleLine: true,
    onClick: () => { },
  }];

  return (
    <Notification dataSource={data} title="消息通知" />
  );
};

export default Demo;
