import React, { FC, useState, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import HeadPanel from './components/HeadPanel';
import WeekPanel from './components/WeekPanel';
import MonthPanel from './components/MonthPanel';
import { CalendarPlusType } from './PropsType';
import './index.less';
import {
  formatDate,
  nextMonthDate,
  nextYearDate,
  preYearDate,
  preMonthDate,
} from './utils/date';

const prefixCls = 'alita-calendarplus';

const CalendarPlus: FC<CalendarPlusType> = (props) => {
  const {
    currentDate = new Date(),
    subTitles = [],
    onChange = () => {},
    onSelectValue = () => {},
    renderHeader = () => (
      <HeadPanel
        onNextMonth={onNextMonth}
        onNextYear={onNextYear}
        onPreMonth={onPreMonth}
        onPreYear={onPreYear}
        title={formatDate(monthPanelDate, 'yyyy年MM月')}
      />
    ),
  } = props;
  const [monthPanelDate, setMonthPanelDate] = useState(currentDate);

  const onNextMonth = () => {
    const nextMonth = nextMonthDate(monthPanelDate);
    setMonthPanelDate(nextMonth);
    onChange(nextMonth);
  };
  const onNextYear = () => {
    const nextYear = nextYearDate(monthPanelDate);
    setMonthPanelDate(nextYear);
    onChange(nextYear);
  };
  const onPreMonth = () => {
    const preMonth = preMonthDate(monthPanelDate);
    setMonthPanelDate(preMonth);
    onChange(preMonth);
  };
  const onPreYear = () => {
    const preYear = preYearDate(monthPanelDate);
    setMonthPanelDate(preYear);
    onChange(preYear);
  };

  // useEffect(() => {
  //   setMonthPanelDate(currentDate);
  //   return () => {};
  // }, [currentDate]);
  return (
    <div className={prefixCls}>
      {renderHeader()}
      <WeekPanel />
      <MonthPanel
        monthPanelDate={monthPanelDate}
        onClick={onSelectValue}
        subTitles={subTitles}
        currentDate={currentDate}
      />
    </div>
  );
};

export default withError(CalendarPlus);
