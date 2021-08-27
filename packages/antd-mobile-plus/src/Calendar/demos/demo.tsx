import React, { FC, useState, useMemo } from 'react';
import { Icon } from 'antd-mobile';
import moment from 'moment';
import Calendar from '../';
import { popupList } from './data';
import './index.less';

const m = (d) => {
  if (!d) {
    return '';
  }
  const dates = Array.isArray(d) ? d : [d];
  return dates.map((date) => moment(date).format('yyyy/MM/DD')).join('-');
};

const prefixCls = 'calendar-page';
interface DemoProps {}

const CalendarItem = ({ title = '', ...restProps }) => {
  const [show, setShow] = useState(false);

  const [subtitle, setSubtitle] = useState(m(restProps.defaultDate));
  return (
    <>
      <div className={`${prefixCls}-cell`} onClick={() => setShow(true)}>
        <div>{title}</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '0.24rem', color: '#999' }}>{subtitle}</span>
          <Icon type="right" color="#969799" />
        </div>
      </div>
      <Calendar
        show={show}
        title={title}
        onClose={() => {
          setShow(false);
        }}
        onConfirm={(d) => {
          console.log(d);
          setSubtitle(m(d));
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
      <div style={{ height: '140vw' }}>
        <Calendar poppable={false}></Calendar>
      </div>
    </div>
  );
};

export default Demo;
