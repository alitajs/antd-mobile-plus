/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-19 15:21:12
 */
import React, { FC } from 'react';
import { Progress, WhiteSpace } from 'antd-mobile';
import { Table } from '@alitajs/antd-mobile-plus';
import 'antd-mobile/lib/progress/style/index.css';
import 'antd-mobile/lib/white-space/style/index.css';

interface DemoProps {}

const dataSourceBase = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '南京江宁',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁',
  },
];

const columnsBase = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 20,
    align: 'center'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 20,
    align: 'center'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 60,
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
    width: 20,
    align: 'center'
  },
  {
    title: '工时',
    dataIndex: 'time',
    key: 'time',
    width: 20,
    align: 'center'
  },
  {
    title: '项目进度',
    dataIndex: 'projectProgress',
    key: 'projectProgress',
    width: 60,
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
      <Table dataSource={dataSourceBase} columns={columnsBase} />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <Table dataSource={dataSource} columns={columns} twoDimension />
    </div>
  );
};

export default Demo;
