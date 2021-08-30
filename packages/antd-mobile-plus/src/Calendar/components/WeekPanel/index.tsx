import React, { FC, useMemo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { BaseCalendarType } from '../../PropsType';
import './index.less';

const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

interface WeekPanelProps {
  firstDayOfWeek?: BaseCalendarType['firstDayOfWeek'];
}

const prefixCls = 'alita-weekpanel';
const WeekPanel: FC<WeekPanelProps> = (props) => {
  const { firstDayOfWeek = 0 } = props;
  const renderWeekDays = useMemo(
    () => [
      ...weekdays.slice(firstDayOfWeek, 7),
      ...weekdays.slice(0, firstDayOfWeek),
    ],
    [firstDayOfWeek],
  );

  return (
    <div className={prefixCls}>
      {renderWeekDays.map((text) => (
        <span key={text} className={`${prefixCls}-weekday`}>
          {text}
        </span>
      ))}
    </div>
  );
};

WeekPanel.displayName = 'WeekPanel';
export default withError(WeekPanel);
