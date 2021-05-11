import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import DayPanel from '../DayPanel';
import { daysOfMonth, formatDate } from '../../utils/date';
import './index.less';

interface MonthPanelProps {
  /**
   * @description 点击某个日期的回调
   */
  onClick?: (e: Date) => void;
  /**
   * @description 选中的日期
   */
  currentDate?: Date;
  /**
   * @description 子标题数组
   */
  subTitles?: any[];
}

const prefixCls = 'alita-calendar-month';
const MonthPanel: FC<MonthPanelProps> = (props) => {
  const {
    onClick = () => {},
    currentDate = new Date(),
    subTitles = [],
  } = props;
  const getStatus = (item: any): 'disable' | 'nomal' | 'selected' => {
    const itemDateText = formatDate(item.date, 'yyyy-MM-dd');
    const dateText = formatDate(currentDate, 'yyyy-MM-dd');
    if (itemDateText === dateText) {
      return 'selected';
    }
    return item.type;
  };

  const getSubTitles = (date: Date): string | undefined => {
    const todayItems = subTitles.filter(
      (item) =>
        formatDate(item.date, 'yyyy-MM-dd') === formatDate(date, 'yyyy-MM-dd'),
    );
    if (todayItems.length > 0) {
      return todayItems[0].content;
    }
    return undefined;
  };

  return (
    <div className={prefixCls}>
      {daysOfMonth(currentDate).map((item, index) => (
        <DayPanel
          key={index}
          day={item.day}
          status={getStatus(item)}
          subTitle={getSubTitles(item.date)}
          onClick={() => {
            onClick(item.date);
          }}
        />
      ))}
    </div>
  );
};

export default withError(MonthPanel);
