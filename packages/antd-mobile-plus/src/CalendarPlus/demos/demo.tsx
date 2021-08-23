import React, { FC, useState } from 'react';
import { CalendarPlus } from '@alitajs/antd-mobile-plus';
import { nextMonthDate } from '../utils/date';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [currentDate, setCurrentDate] = useState(nextMonthDate(new Date()));
  return (
    <div>
      <CalendarPlus
        currentDate={currentDate}
        onSelectValue={(e) => {
          setCurrentDate(e);
        }}
        onChange={(e) => {
          console.log(e);
        }}
      />
      <div style={{ height: '50px' }}></div>
      <CalendarPlus
        onSelectValue={(e) => {
          setCurrentDate(e);
        }}
        onChange={(e) => {
          console.log(e);
        }}
        subTitles={[{ date: currentDate, content: '123' }]}
        currentDate={currentDate}
        renderHeader={() => (
          <div
            style={{
              padding: '0.2rem',
              textAlign: 'center',
              fontSize: '0.32rem',
            }}
          >
            我是自定义header
          </div>
        )}
      />
    </div>
  );
};

export default Demo;
