import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Year from '../Year';
import Month from '../Month';

import './index.less';

interface YearPanelType {
  year: number;
  minMonth?: number;
  maxMonth?: number;
  date: Date;
  onChange?: (date: Date) => void;
  onScrollInitialY?: (d: number) => void;
}

const prefixCls = 'alita-year-panel';

const YearPanel: FC<YearPanelType> = ({
  minMonth = 1,
  maxMonth = 12,
  year,
  date,
  onChange = () => {},
  onScrollInitialY = () => {},
}) => {
  const MonthView = () => {
    let monthList = [];
    for (let index = minMonth; index <= maxMonth; index++) {
      monthList.push(index);
    }
    return (
      <>
        {new Array(maxMonth - minMonth + 1).fill(0).map((item, index) => {
          return (
            <Month
              text={`${minMonth + index}`}
              key={index}
              onActiveY={onScrollInitialY}
              active={
                date.getFullYear() === year &&
                date.getMonth() + 1 === minMonth + index
              }
              onClick={() => {
                const tDate = new Date();
                tDate.setFullYear(year);
                tDate.setMonth(minMonth + index - 1);
                tDate.setDate(1);
                onChange(tDate);
              }}
            />
          );
        })}
      </>
    );
  };
  return (
    <div className={prefixCls}>
      <Year text={`${year}`} active={date.getFullYear() === year} />
      <MonthView />
    </div>
  );
};

YearPanel.displayName = 'YearPanel';
export default withError(YearPanel);
