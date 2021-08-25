import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import moment from 'moment';
import WeekPanel from './components/WeekPanel';
import MonthPanel from './components/MonthPanel';
import './index.less';
import { useSetState } from 'ahooks';

const prefixCls = 'alita-calendar-panel';

function CalendarPanel(props: any): React.ReactElement<any, any> | null {
  const {
    type = 'single',
    title = '日期选择',
    minDate = new Date(),
    maxDate = moment().subtract(6, 'months').format('yyyy-MM-DD'),
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
    mode = 'popup',
    round = true,
    maxRang,
    rangePrompt = '选择天数不能超过 xx 天',
    allowSameDay = false,
    onSelect,
    onConfirm,
    onUnselect,
  } = props;

  const [state, setstate] = useSetState({
    currentDate: defaultDate,
  });
  const log = useTracker(CalendarPanel.displayName, {});

  const onDayClick = (item) => {
    // 判断是否 readonly  或者item.date是否存在 不处理
    if (type === 'range') {
      // 添加currentDate
    } else if (type === 'multiple') {
    } else {
      // single
    }
  };

  return (
    <div className={`${prefixCls}`}>
      <WeekPanel firstDayOfWeek={firstDayOfWeek} />
      <MonthPanel onClick={onDayClick} currentDate={state.currentDate} />
    </div>
  );
}

CalendarPanel.displayName = 'CalendarPanel';
export default withError(CalendarPanel);
