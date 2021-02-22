/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-19 11:14:00
 */
import React, { FC, useState } from 'react';
import { CalendarPlus } from '@alitajs/antd-mobile-plus';
import { nextMonthDate } from '../utils/date';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div>
      <CalendarPlus />
      <div style={{ height: '50px' }}></div>
      <CalendarPlus
        date={nextMonthDate(new Date())}
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
              padding: '40px 20px',
              textAlign: 'center',
              fontSize: '55px',
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
