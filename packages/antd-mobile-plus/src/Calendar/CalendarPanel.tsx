import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { DatePicker } from 'rmc-calendar';
import moment from 'moment';
import './index.less';

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
    firstDayOfWeek = '0',
    show = false,
    mode = 'popup',
    round = true,
    maxRang,
    rangePrompt = '选择天数不能超过 xx 天',
    allowSameDay = false,
  } = props;
  const log = useTracker(CalendarPanel.displayName, {});
  return (
    <div className={`${prefixCls}`}>
      <DatePicker></DatePicker>
    </div>
  );
}

CalendarPanel.displayName = 'CalendarPanel';
export default withError(CalendarPanel);
