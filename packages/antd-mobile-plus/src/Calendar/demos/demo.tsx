import React, { FC, useState } from 'react';
import Calendar from '../';
import { getToday } from '../utils';
import { Button } from 'antd-mobile';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ height: '100vh' }}>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开日历
      </Button>
      <Calendar
        show={visible}
        type="multiple"
        // poppable={false}
        firstDayOfWeek={1}
        title="日历标题"
        onClose={() => setVisible(false)}
        onSelect={(...a) => {
          console.log(...a);
        }}
        onConfirm={(...e) => {
          console.log(...e);
        }}
        defaultDate={
          new Date(
            getToday().getFullYear(),
            getToday().getMonth() + 3,
            getToday().getDate(),
          )
        }
      ></Calendar>
    </div>
  );
};

export default Demo;
