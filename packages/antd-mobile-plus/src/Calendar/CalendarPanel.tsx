import React, { FC, useRef, useEffect, useMemo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import moment from 'moment';
import { CalendarDayItem } from './PropsType';
import MonthPanel from './components/MonthPanel';
import Header from './components/Header';
import FooterPanel from './components/FooterPanel';
import 'antd-mobile/es/button/style/index';
import './index.less';
import { useSetState, useSize } from 'ahooks';
import classNames from 'classnames';
import Toast from 'antd-mobile/lib/toast';
import 'antd-mobile/lib/toast/style';
import {
  calcDateNum,
  cloneDate,
  cloneDates,
  compareDay,
  compareMonth,
  getDayByOffset,
  getNextDay,
  getPrevDay,
  getScrollTop,
  getToday,
} from './utils';
import { lang } from './lang';
import { raf, useRefs } from './hooks';

const prefixCls = 'alita-calendar-panel';

function CalendarPanel(props: any): React.ReactElement<any, any> | null {
  const {
    type = 'single',
    title = '日期选择',
    minDate = getToday(),
    maxDate = new Date(
      getToday().getFullYear(),
      getToday().getMonth() + 6,
      getToday().getDate(),
    ),
    color,
    defaultDate = new Date(),
    poppable = true,
    lazyRender = true,
    showMark = true,
    showTitle = true,
    showSubtitle = true,
    showConfirm = true,
    readonly = false,
    confirmText = '确定',
    confirmDisabledText = '确定',
    firstDayOfWeek = 0,
    show = false,
    maxRange,
    rangePrompt,
    showRangePrompt = true,
    allowSameDay = false,
    onSelect = () => {},
    onConfirm = () => {},
    onUnselect = () => {},
    onMonthShow = () => {},
    onOverRang = () => {},
  } = props;

  const limitDateRange = (date: Date, miDate = minDate, maDate = maxDate) => {
    if (compareDay(date, miDate) === -1) {
      return minDate;
    }
    if (compareDay(date, maDate) === 1) {
      return maxDate;
    }
    return date;
  };

  const [monthRefs, setMonthRefs] = useRefs<any>();

  const getInitialDate = (defDate = defaultDate) => {
    if (defDate === null) {
      return defDate;
    }

    const now = getToday();

    if (type === 'range') {
      if (!Array.isArray(defDate)) {
        defDate = [];
      }
      const start = limitDateRange(
        defDate[0] || now,
        minDate,
        getPrevDay(maxDate),
      );
      const end = limitDateRange(defDate[1] || now, getNextDay(minDate));
      return [start, end];
    }

    if (type === 'multiple') {
      if (Array.isArray(defDate)) {
        return defDate.map((date) => limitDateRange(date));
      }
      return [limitDateRange(now)];
    }

    if (!defaultDate || Array.isArray(defaultDate)) {
      defDate = now;
    }
    return limitDateRange(defDate);
  };

  const [state, setState] = useSetState({
    currentDate: getInitialDate(),
    subtitle: '',
  });

  const bodyRef = useRef(null);
  const size = useSize(bodyRef);
  const bodyHeightRef = useRef(0);

  const log = useTracker(CalendarPanel.displayName, {});
  const dayOffset = (firstDayOfWeek ? +firstDayOfWeek % 7 : 0) as any;

  useEffect(() => {
    if (size.width && size.height) {
      bodyHeightRef.current = Math.floor(size.height!);
      scrollIntoView();
    }
  }, [size]);

  const months = useMemo(() => {
    const months: Date[] = [];
    const cursor = new Date(minDate);
    cursor.setDate(1);
    do {
      months.push(new Date(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    } while (compareMonth(cursor, maxDate) !== 1);

    return months;
  }, [minDate]);

  const onScroll = () => {
    const top = getScrollTop(bodyRef.current!);
    const bottom = top + bodyHeightRef.current;
    const heights = months.map((item, index) =>
      monthRefs.current[index].getHeight(),
    );
    const heightSum = heights.reduce((a, b) => a + b, 0);
    // iOS scroll bounce may exceed the range
    if (bottom > heightSum && top > 0) {
      return;
    }
    let height = 0;
    let currentMonth;
    const visibleRange = [-1, -1];
    for (let i = 0; i < months.length; i++) {
      const month = monthRefs.current[i];
      const visible = height <= bottom && height + heights[i] >= top;
      if (visible) {
        visibleRange[1] = i;
        if (!currentMonth) {
          currentMonth = month;
          visibleRange[0] = i;
        }
        if (!monthRefs.current[i].showed) {
          monthRefs.current[i].showed = true;
          if (onMonthShow) {
            onMonthShow({
              date: month.date,
              title: month.getTitle(),
            });
          }
        }
      }
      height += heights[i];
    }
    months.forEach((month, index) => {
      const visible =
        index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
      monthRefs.current[index].setVisible(visible);
    });
    console.log('currentMonth: ', currentMonth);
    if (currentMonth) {
      console.log('subtitle', currentMonth.getTitle());
      setState({
        subtitle: currentMonth.getTitle(),
      });
    }
  };

  const scrollToDate = (targetDate: Date) => {
    raf(() => {
      months.some((month, index) => {
        if (compareMonth(month, targetDate) === 0) {
          if (bodyRef.current) {
            monthRefs.current[index].scrollIntoView(bodyRef.current);
          }
          return true;
        }

        return false;
      });

      onScroll();
    });
  };

  const scrollIntoView = () => {
    if (poppable && !show) {
      return;
    }

    const { currentDate } = state;
    if (currentDate) {
      const targetDate =
        type === 'single' ? currentDate : (currentDate as Date[])[0];
      scrollToDate(targetDate);
    } else {
      raf(onScroll);
    }
  };

  const checkRange = (date: [Date, Date]) => {
    // const { maxRange, rangePrompt, showRangePrompt } = props;

    if (maxRange && calcDateNum(date) > maxRange) {
      if (showRangePrompt) {
        Toast.info(rangePrompt || lang('rangePrompt', maxRange));
      }
      onOverRang();
      return false;
    }

    return true;
  };

  const unselect = (unselectedDate: Date) => {
    if (onUnselect) {
      onUnselect(unselectedDate);
    }
  };

  const select = (date: Date | Date[], complete?: boolean) => {
    const setCurrentDate = (date: Date | Date[]) => {
      setState({
        currentDate: date,
      });
      onSelect && onSelect(cloneDates(date));
    };

    if (complete && type === 'range') {
      const valid = checkRange(date as [Date, Date]);

      if (!valid) {
        if (showConfirm) {
          setCurrentDate([
            (date as Date[])[0],
            getDayByOffset((date as Date[])[0], +maxRange - 1),
          ]);
        } else {
          setCurrentDate(date);
        }
        return;
      }
    }

    setCurrentDate(date);

    if (complete && !showConfirm) {
      onConfirm(cloneDates(state.currentDate));
    }
  };

  const onClickDay = (item: CalendarDayItem) => {
    if (readonly || !item.date) {
      return;
    }

    const { date } = item;
    const { currentDate } = state;

    if (type === 'range') {
      if (!currentDate) {
        select([date]);
        return;
      }

      const [startDay, endDay] = currentDate;

      if (startDay && !endDay) {
        const compareToStart = compareDay(date, startDay);

        if (compareToStart === 1) {
          select([startDay, date], true);
        } else if (compareToStart === -1) {
          select([date]);
        } else if (allowSameDay) {
          select([date, date], true);
        }
      } else {
        select([date]);
      }
    } else if (type === 'multiple') {
      if (!currentDate) {
        select([date]);
        return;
      }

      let selectedIndex;
      const selected = state.currentDate.some(
        (dateItem: Date, index: number) => {
          const equal = compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex = index;
          }
          return equal;
        },
      );

      if (selected) {
        const [unselectedDate] = currentDate.splice(selectedIndex, 1);
        setState({
          currentDate,
        });
        unselect(cloneDate(unselectedDate));
      } else if (maxRange && currentDate.length >= maxRange) {
        Toast.info(rangePrompt || lang('rangePrompt', maxRange));
      } else {
        select([...currentDate, date]);
      }
    } else {
      select(date, true);
    }
  };

  const renderMonth = (date: Date, index: number) => {
    const showMonthTitle = index !== 0 || !showSubtitle;
    return (
      <MonthPanel
        key={date.getTime()}
        ref={setMonthRefs(index)}
        date={date}
        currentDate={state.currentDate}
        showMonthTitle={showMonthTitle}
        firstDayOfWeek={dayOffset}
        type={type}
        color={color}
        minDate={minDate}
        maxDate={maxDate}
        showMark={showMark}
        // rowHeight={rowHeight}
        lazyRender={lazyRender}
        showSubtitle={showSubtitle}
        allowSameDay={allowSameDay}
        onClick={onClickDay}
      />
    );
  };

  const buttonDisabled = useMemo(() => {
    const { currentDate } = state;

    if (currentDate) {
      if (props.type === 'range') {
        return !(currentDate as Date[])[0] || !(currentDate as Date[])[1];
      }
      if (props.type === 'multiple') {
        return !(currentDate as Date[]).length;
      }
    }

    return !currentDate;
  }, [state.currentDate]);

  const renderFooterButton = () => {
    if (showConfirm) {
      const text = buttonDisabled ? confirmDisabledText : confirmText;
      return (
        <FooterPanel
          color={color}
          className={`${prefixCls}-confirm`}
          disabled={buttonDisabled}
          onClick={() => onConfirm(cloneDates(state.currentDate))}
        >
          {text || lang('confirm')}
        </FooterPanel>
      );
    }
    return null;
  };

  const renderFooter = () => (
    <div className={classNames(`${prefixCls}-footer`)}>
      {renderFooterButton()}
    </div>
  );
  return (
    <div className={prefixCls}>
      <Header
        title={title}
        subtitle={state.subtitle}
        showTitle={showTitle}
        showSubtitle={showSubtitle}
        firstDayOfWeek={dayOffset}
        onClickSubtitle={() => {}}
      />
      <div ref={bodyRef} className={`${prefixCls}-months`} onScroll={onScroll}>
        {months.map(renderMonth)}
      </div>
      {renderFooter()}
    </div>
  );
}

CalendarPanel.displayName = 'CalendarPanel';
export default withError(CalendarPanel);
