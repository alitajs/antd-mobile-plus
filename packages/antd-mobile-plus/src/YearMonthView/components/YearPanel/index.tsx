import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Year from '../Year';
import Month from '../Month';

import './index.less';

interface YearPanelType {
  /**
   * @description 年份
   */
  year: number;
  /**
   * @description 最小月 1~12
   * @default 1
   */
  minMonth?: number;
  /**
   * @description 最大月 1~12
   * @default 12
   */
  maxMonth?: number;
  /**
   * @description 选中日期
   */
  date: Date;
  /**
   * @description 点击回调
   */
  onChange?: (date: Date) => void;
  /**
   * @description Y轴初始化滚动的坐标
   */
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
    return (
      <>
        {new Array(maxMonth - minMonth + 1).fill(0).map((item, index) => {
          return (
            <Month
              text={`${minMonth + index + 1}`}
              key={`${year}-${minMonth + index + 1}`}
              onActiveY={onScrollInitialY}
              active={
                date.getFullYear() === year &&
                date.getMonth() === minMonth + index
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
