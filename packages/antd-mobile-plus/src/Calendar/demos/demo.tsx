import React, { FC, useState, useMemo } from 'react';
import { Icon } from 'antd-mobile';
import Calendar from '../';
import { popupList } from './data';
import './index.less';

const prefixCls = 'calendar-page';
interface DemoProps {}

const CalendarItem = ({ title = '', ...restProps }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={`${prefixCls}-cell`} onClick={() => setShow(true)}>
        <div>{title}</div>
        <Icon type="right" color="#969799" />
      </div>
      <Calendar
        show={show}
        onClose={() => {
          setShow(false);
        }}
        {...restProps}
      ></Calendar>
    </>
  );
};

const GroupView = ({ popups = [], title = '' }) => {
  return (
    <div className={`${prefixCls}-group`}>
      <div className={`${prefixCls}-group-title`}>{title}</div>
      <div className={`${prefixCls}-list-view`}>
        {popups.map((item: any) => (
          <CalendarItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

const Demo: FC<DemoProps> = (props) => {
  return (
    <div className="popup-page">
      {popupList.map((item: any) => (
        <GroupView key={item.title} {...item} />
      ))}
      <Calendar poppable={false}></Calendar>
    </div>
  );
};

export default Demo;
