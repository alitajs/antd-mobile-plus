import React, { FC } from 'react';
import Calendar from '../';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        type="range"
        firstDayOfWeek={1}
        title="日历标题"
        onSelect={(...a) => {
          console.log(...a);
        }}
        onConfirm={(...e) => {
          console.log(...e);
        }}
        allowSameDay={true}
        maxRange={5}
      ></Calendar>
    </div>
  );
};

export default Demo;
