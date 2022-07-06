import React, { FC } from 'react';
import { Progress, WhiteSpace } from 'antd-mobile';
import { Table } from '@alitajs/antd-mobile-plus';
import 'antd-mobile/lib/progress/style/index.css';
import 'antd-mobile/lib/white-space/style/index.css';

interface DemoProps {}

const titleBackground = '#329ED9';
const titleColor = '#fff';
const fixedLeft = true;
const firstLeftStyle = {background: '#329ED9' , color: '#fff'};

const dataSourceBase = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '南京江宁',
    time:'1990-10-10 12:22:24',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁',
    time:'2022-03-15 15:12:47',
  },
];

const columnsBase = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 50,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 400,
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    width: 400,
  },
];

// 二维表格
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    time: 32,
    projectProgress: 50,
  },
  {
    key: '2',
    name: '胡彦祖',
    time: 42,
    projectProgress: 70,
  },
];

const columns = [
  {
    title: ['工作', '姓名'],
    dataIndex: 'name',
    key: 'name',
    width: 2,
    align: 'center'
  },
  {
    title: '工时',
    dataIndex: 'time',
    key: 'time',
    width: 2,
    align: 'center'
  },
  {
    title: '项目进度',
    dataIndex: 'projectProgress',
    key: 'projectProgress',
    width: 6,
    render: (text: number) => {
      return (
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
          <div style={{
            marginRight: 5,
            width: '100%',
          }}><Progress percent={text} position="normal" /></div>
          <div aria-hidden="true">{text}%</div>
        </div>
      )
    }
  },
];

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <Table dataSource={dataSourceBase} columns={columnsBase} titleBackground={titleBackground} titleColor={titleColor} firstLeftStyle={firstLeftStyle} fixedLeft={fixedLeft} />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <Table dataSource={dataSource} columns={columns} twoDimension />
    </div>
  );
};

export default Demo;
