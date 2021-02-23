/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-22 16:00:51
 */
import React, { FC, useState } from 'react';
import { SearchView } from '@alitajs/antd-mobile-plus';
import './index.less';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [filterValue, setFilterValue] = useState('02');
  const [filterValue01, setFilterValue01] = useState();
  const [filterValue02, setFilterValue02] = useState('05');

  return (
    <div>
      <SearchView
        placeholder="请输入文字"
        filterData={[
          { label: '竣工', value: '01' },
          { label: '测试02测试02', value: '02' },
          { label: '测试03', value: '03' },
          { label: '测试04', value: '04' },
          { label: '测试05', value: '05' },
          { label: '测试06', value: '06' },
          { label: '测试08', value: '07' },
          { label: '测试10', value: '08' },
        ]}
        filterValue={filterValue}
        showLeft={true}
        onFilterChange={(e: SearchFilterDataType) => {
          setFilterValue(e.value);
          console.log('onFilterChange：', e);
        }}
        onFilterSelected={(e) => {
          console.log('onFilterSelected：', e);
        }}
        maxLength={10}
        onSearch={(v: string) => {
          console.log('onSearch:', v);
        }}
        initalzeValue="初始化数据"
        onFocus={(v: string) => {
          console.log('onFocus:', v);
        }}
        onBlur={(v: string) => {
          console.log('onBlur:', v);
        }}
      />
      <div className={'search-view-demo'}></div>
      <SearchView
        placeholder="请输入文字"
        filterData={[
          { label: '竣工', value: '01' },
          { label: '测试02测试02', value: '02' },
          { label: '测试03', value: '03' },
          { label: '测试04', value: '04' },
          { label: '测试05', value: '05' },
          { label: '测试06', value: '06' },
          { label: '测试08', value: '07' },
          { label: '测试10', value: '08' },
        ]}
        filterValue={filterValue01}
        showLeft={true}
        onFilterChange={(e: SearchFilterDataType) => {
          console.log('onFilterChange：', e);
          setFilterValue01(e.value);
        }}
        onFilterSelected={(e) => {
          console.log('onFilterSelected：', e);
        }}
        onSearch={(v: string) => {
          console.log('onSearch:', v);
        }}
        onFocus={(v: string) => {
          console.log('onFocus:', v);
        }}
        onBlur={(v: string) => {
          console.log('onBlur:', v);
        }}
        type="number"
      />

      <div className={'search-view-demo-fixed'}>
        <SearchView
          placeholder="请输入文字"
          filterData={[
            { label: '竣工', value: '01' },
            { label: '测试02测试02', value: '02' },
            { label: '测试03', value: '03' },
            { label: '测试04', value: '04' },
            { label: '测试05', value: '05' },
            { label: '测试06', value: '06' },
            { label: '测试08', value: '07' },
            { label: '测试10', value: '08' },
          ]}
          filterValue={filterValue02}
          showLeft={true}
          onFilterChange={(e: SearchFilterDataType) => {
            setFilterValue02(e.value);
            console.log('onFilterChange：', e);
          }}
          onFilterSelected={(e) => {
            console.log('onFilterSelected：', e);
          }}
          onSearch={(v: string) => {
            console.log('onSearch:', v);
          }}
          onFocus={(v: string) => {
            console.log('onFocus:', v);
          }}
          onBlur={(v: string) => {
            console.log('onBlur:', v);
          }}
        />
      </div>
    </div>
  );
};

export default Demo;
