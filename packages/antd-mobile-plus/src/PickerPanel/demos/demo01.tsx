import React, { FC, useState } from 'react';
import { PickerPanel } from '@alitajs/antd-mobile-plus';
import { Button } from 'antd-mobile-v2';
import './demo01.less';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const data = [
    {
      label: '中国铁路局01',
      value: '01',
    },
    {
      label: '中国铁路局02',
      value: '02',
    },
    {
      label: '中国铁路局03',
      value: '03',
    },
    {
      label: '中国铁路局04',
      value: '04',
    },
  ];
  const [open, setOpen] = useState(false);
  const onRenderHeaderView = (count: React.ReactNode) => (
    <div className="header">我是标题：{count}个</div>
  );
  const onRenderItem = (item: any, index: number) => (
    <div key={item.value} className="item">
      {item.label}
    </div>
  );
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        打开
      </Button>
      <PickerPanel
        open={open}
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
        onToggleHandle={(on) => {
          setOpen(on);
        }}
        onRenderHeaderView={onRenderHeaderView}
        onRenderItem={onRenderItem}
      />
    </div>
  );
};

export default Demo;
