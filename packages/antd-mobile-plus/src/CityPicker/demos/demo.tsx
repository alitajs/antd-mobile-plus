import React, { FC, useState } from 'react';
import { Button } from 'antd-mobile';
import { CityPicker } from '@alitajs/antd-mobile-plus';
import { getData } from './data';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [selectId, setSelectId] = useState();
  const [data, setData] = useState<any[]>([]);
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        点击
      </Button>
      <CityPicker
        show={open}
        data={data}
        initialValues={[
          {
            id: '0-1',
            lable: '选择1',
          },
          {
            id: '0-1-2',
            lable: '选择2',
          },
        ]}
        onClose={() => {
          setOpen(false);
        }}
        title="标题"
        onChange={(item: { id: string | undefined }) => {
          if (!item) {
            setData(getData());
          } else {
            setData(getData(item.id));
          }
        }}
        onFinish={(ids) => {
          console.log(ids);
        }}
        placeholder={['请选择1级菜单', '请选择2级菜单', '请选择3级菜单']}
        alias={{
          label: 'lable',
        }}
      />
    </div>
  );
};

export default Demo;
