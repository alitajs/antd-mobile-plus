import React, { FC, useMemo, useRef, useImperativeHandle } from 'react';
import { withError } from '@alitajs/tracker';
import {
  CalendarDayItem,
  CalendarDayType,
  CalendarType,
} from '../../PropsType';
import './index.less';
import {
  formatMonthTitle,
  getMonthEndDay,
  compareDay,
  getPrevDay,
  getNextDay,
  addUnit,
  setScrollTop,
} from '../../utils';
import { useSize, useToggle } from 'ahooks';
import { lang } from '../../lang';
import DayPanel from '../DayPanel';

interface MonthPanelProps {
  type?: CalendarType;
  color?: string;
  showMark?: boolean;
  rowHeight?: number | string;
  formatter?: (item: CalendarDayItem) => CalendarDayItem;
  lazyRender?: boolean;
  currentDate?: Date | Date[];
  allowSameDay?: boolean;
  showSubtitle?: boolean;
  showMonthTitle?: boolean;
  firstDayOfWeek?: number;
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  onClick?: (item: CalendarDayItem) => void;
}

const prefixCls = 'alita-monthpanel';
const MonthPanel: FC<MonthPanelProps> = (props) => {
  const {
    date,
    firstDayOfWeek,
    lazyRender,
    showMonthTitle,
    formatter,
    allowSameDay,
    currentDate,
    onClick,
    color,
    showMark,
    type,
    showSubtitle,
    minDate,
    maxDate,
  } = props;
  const [visible, { toggle }] = useToggle(true);
  const monthRef = useRef(null);
  const daysRef = useRef(null);
  const { height = 0 } = useSize(monthRef) || {};

  useImperativeHandle((props as any).forwardRef, () => ({
    getTitle,
    getHeight: () => height,
    setVisible: toggle,
    scrollIntoView,
  }));

  const scrollIntoView = (body: Element) => {
    const el = (showSubtitle ? daysRef.current : monthRef.current) as any;

    const scrollTop =
      el!.getBoundingClientRect().top -
      body.getBoundingClientRect().top +
      body.scrollTop;

    setScrollTop(body, scrollTop);
  };

  const title: string = useMemo(() => formatMonthTitle(date), [date]);
  const getTitle = () => title;
  const rowHeight = useMemo(() => addUnit(props.rowHeight), [props.rowHeight]);

  // 获取偏移量
  const offset = useMemo(() => {
    const realDay = date.getDay();
    if (firstDayOfWeek) {
      return (realDay + 7 - firstDayOfWeek) % 7;
    }
    return realDay;
  }, [date, firstDayOfWeek]);

  // 获取总天数
  const totalDay = useMemo(
    () => getMonthEndDay(date.getFullYear(), date.getMonth() + 1),
    [date],
  );

  // 是否需要加载
  const shouldRender = useMemo(
    () => visible || !lazyRender,
    [visible, lazyRender],
  );

  const getMultipleDayType = (day: Date) => {
    const isSelected = (date: Date) =>
      (currentDate as Date[]).some((item) => compareDay(item, date) === 0);

    if (isSelected(day)) {
      const prevDay = getPrevDay(day);
      const nextDay = getNextDay(day);
      const prevSelected = isSelected(prevDay);
      const nextSelected = isSelected(nextDay);

      if (prevSelected && nextSelected) {
        return 'multiple-middle';
      }
      if (prevSelected) {
        return 'end';
      }
      if (nextSelected) {
        return 'start';
      }
      return 'multiple-selected';
    }

    return '';
  };

  const getRangeDayType = (day: Date) => {
    const [startDay, endDay] = currentDate as Date[];

    if (!startDay) {
      return '';
    }

    const compareToStart = compareDay(day, startDay);

    if (!endDay) {
      return compareToStart === 0 ? 'start' : '';
    }

    const compareToEnd = compareDay(day, endDay);

    if (allowSameDay && compareToStart === 0 && compareToEnd === 0) {
      return 'start-end';
    }
    if (compareToStart === 0) {
      return 'start';
    }
    if (compareToEnd === 0) {
      return 'end';
    }
    if (compareToStart > 0 && compareToEnd < 0) {
      return 'middle';
    }

    return '';
  };

  const getDayType = (day: Date): CalendarDayType => {
    if (compareDay(day, minDate!) < 0 || compareDay(day, maxDate!) > 0) {
      return 'disabled';
    }

    if (currentDate === null) {
      return '';
    }

    if (Array.isArray(currentDate)) {
      if (type === 'multiple') {
        return getMultipleDayType(day);
      }
      if (type === 'range') {
        return getRangeDayType(day);
      }
    } else if (type === 'single') {
      return compareDay(day, currentDate as Date) === 0 ? 'selected' : '';
    }

    return '';
  };

  const getBottomInfo = (dayType: CalendarDayType) => {
    if (type === 'range') {
      if (dayType === 'start' || dayType === 'end') {
        return lang(dayType);
      }
      if (dayType === 'start-end') {
        return lang('startEnd');
      }
    }
  };

  const days = useMemo(() => {
    const days: CalendarDayItem[] = [];
    const year = date.getFullYear();
    const month = date.getMonth();

    for (let day = 1; day <= totalDay; day++) {
      const date = new Date(year, month, day);
      const type = getDayType(date);

      let config: CalendarDayItem = {
        date,
        type,
        text: day,
        bottomInfo: getBottomInfo(type),
      };
      if (formatter) {
        config = formatter(config);
      }
      days.push(config);
    }
    return days;
  }, [date, formatter, currentDate]);

  const renderTitle = () => {
    if (showMonthTitle) {
      return <div className={`${prefixCls}-month-title`}>{title}</div>;
    }
    return null;
  };

  const placeholders = useMemo(() => {
    const count = Math.ceil((totalDay + offset) / 7);
    return Array(count).fill({ type: 'placeholder' });
  }, [totalDay, offset]);

  const renderDay = (item: CalendarDayItem, index: number) => (
    <DayPanel
      key={item.text || index}
      item={item}
      index={index}
      color={color}
      offset={offset}
      rowHeight={rowHeight}
      onClick={onClick}
    />
  );

  const renderDays = () => (
    <div ref={daysRef} className={`${prefixCls}-days`}>
      {renderMark()}
      <div className={`${prefixCls}-month-wrapper`}>
        {(shouldRender ? days : placeholders).map(renderDay)}
      </div>
    </div>
  );

  const renderMark = () => {
    if (showMark && shouldRender) {
      return (
        <div className={`${prefixCls}-month-mark`}>{date.getMonth() + 1}</div>
      );
    }
    return null;
  };

  return (
    <div className={prefixCls} ref={monthRef}>
      {renderTitle()}
      {renderDays()}
    </div>
  );
};

MonthPanel.displayName = 'MonthPanel';
export default withError(MonthPanel, { forwardRef: true });
