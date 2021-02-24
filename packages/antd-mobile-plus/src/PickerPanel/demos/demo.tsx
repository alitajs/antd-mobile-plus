import React, { FC, useState } from 'react';
import { PickerPanel } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const data = [
    {
      label: '中国铁路局',
      value: '01',
    },
    {
      label: '中国铁路局',
      value: '02',
    },
    {
      label: '中国铁路局',
      value: '03',
    },
    {
      label: '中国铁路局',
      value: '04',
    },
    {
      label: '中国铁路局',
      value: '05',
    },
    {
      label: '中国铁路局',
      value: '06',
    },
    {
      label: '中国铁路局',
      value: '07',
    },
    {
      label: '中国铁路局',
      value: '08',
    },
    {
      label: '中国铁路局',
      value: '09',
    },
    {
      label: '中国铁路局',
      value: '010',
    },
    {
      label: '中国铁路局',
      value: '052',
    },
    {
      label: '中国铁路局',
      value: '063',
    },
    {
      label: '中国铁路局',
      value: '073',
    },
  ];
  return (
    <div>
      <PickerPanel
        data={data}
        alias={{
          id: 'value',
          label: 'label',
        }}
        onDelete={(item: any, index: number) => {
          console.log(item, index);
        }}
        onItemClick={(item: any, index: number) => {
          console.log(item, index);
        }}
      />
    </div>
  );
};

export default Demo;
