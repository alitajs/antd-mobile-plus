/*
 * @Description:
 * @Autor: fish-qifutao
 * @Date: 2021-03-25 11:05:08
 */
import React, { FC } from 'react';
import { FunctionalCard } from '@alitajs/antd-mobile-plus';
import homePng from '../assets/home.svg';

interface DemoProps {}

const title = "卡片名称";
const desc = "描述";
const id = 1;
const style = { width: '100%' };
const foot = [
  { name: "编辑", key: 'edit', onClick: (id: string, name: string) => { console.log(id, name) } },
  { name: "详情", key: 'edtail', onClick: (id: string, name: string) => { console.log(id, name) } },
  { name: "删除", key: 'delete', onClick: (id: string, name: string) => { console.log(id, name) } },
  { name: "置顶", key: 'up', onClick: (id: string, name: string) => { console.log(id, name) } },
];

const Demo: FC<DemoProps> = (props) => {
  return (
    <FunctionalCard
      img={<img alt="" src={homePng} style={{ width: "48px", height: "48px" }} />}
      title={title}
      desc={desc}
      id={id}
      style={style}
      foot={foot}
    />
  );
};

export default Demo;
