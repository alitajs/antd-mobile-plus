import React, { FC } from 'react';
import { TabList } from '@alitajs/antd-mobile-plus';
import menuSvg from '../assets/menu.svg';

interface DemoProps { }

const tabs = [
  { title: "全部", icon: <img alt="" src={menuSvg} /> },
  { title: "人员", icon: <img alt="" src={menuSvg} /> },
  { title: "地点", icon: <img alt="" src={menuSvg} /> },
  { title: "事件", icon: <img alt="" src={menuSvg} /> },
  { title: "物品", icon: <img alt="" src={menuSvg} /> },
  { title: "组织", icon: <img alt="" src={menuSvg} /> }
];

const itemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#fff"
}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <TabList tabs={tabs}>
        <div style={itemStyle}>
          Content of first tab
        </div>
        <div style={itemStyle}>
          Content of second tab
        </div>
        <div style={itemStyle}>
          Content of third tab
        </div>
        <div style={itemStyle}>
          Content of fourth tab
        </div>
        <div style={itemStyle}>
          Content of fifth tab
        </div>
        <div style={itemStyle}>
          Content of sixth tab
        </div>
        <div style={itemStyle}>
          Content of seventh tab
        </div>
      </TabList>
    </div>
  );
};

export default Demo;
