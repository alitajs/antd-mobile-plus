import React, { FC, useState } from 'react';
import { YearMonthView } from '@alitajs/antd-mobile-plus';
import { setTracker } from '@alitajs/tracker';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  setTracker({
    log(component, params, ext) {
      console.log(component); // 组件名
      console.log(params.version); // antd-mobile-v2 版本号
      console.log(params.reactVersion); // react 版本号
      console.log(params.type); // 内置类型，分为 RENDERED(渲染), CUSTOM(组件自定义的上报)
      // 可选，组件额外的参数，比如 Button 会额外传 params.c1={type: props.type}
      console.log(params);
      // 可选，当 params.type===CUSTOM 的时候，组件可能会传的对应的数据
      // 比如 Button 点击的时候会传 ext='OnPress1'
      console.log(ext);
    },
  });
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());

  return (
    <div>
      <div
        style={{
          width: '8vh',
          height: '90vh',
          position: 'fixed',
          right: 0,
          top: 30,
        }}
      >
        <YearMonthView
          date={date}
          maxDate={new Date('2030/12/1')}
          minDate={new Date(2017, 6, 30)}
          onChange={(e) => {
            setDate(e);
          }}
        />
      </div>

      <div
        style={{
          width: '8vh',
          height: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
        }}
      >
        <YearMonthView
          date={date1}
          onChange={(e) => {
            console.log(e);
            setDate1(e);
          }}
        />
      </div>
    </div>
  );
};

export default Demo;
