import React, { FC, useEffect, useState, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { YearMonthViewType } from './PropsType';
import YearPanel from './components/YearPanel';
import './index.less';

const prefixCls = 'alita-year-month-view';

const YearMonthView: FC<YearMonthViewType> = ({
  date = new Date(),
  minDate,
  maxDate,
  onChange = () => {},
}) => {
  const [isLoadedFn, setIsLoadedFn] = useState(false);
  const [tminDate, setSMinDate] = useState(() => {
    const preYearDate = new Date(date.valueOf());
    preYearDate.setFullYear(date.getFullYear() - 1);
    return minDate ?? preYearDate;
  });
  const [tmaxDate, setTMaxDate] = useState(() => {
    const nextYearDate = new Date(date.valueOf());
    nextYearDate.setFullYear(date.getFullYear() + 1);
    return maxDate ?? nextYearDate;
  });
  const wrapperRef = useRef(null);
  const log = useTracker(YearMonthView.displayName, {});
  const yearCount = tmaxDate.getFullYear() - tminDate.getFullYear() + 1;
  return (
    <div className={prefixCls} ref={wrapperRef}>
      {new Array(yearCount).fill(0).map((item, index) => {
        const minMonth = index === 0 ? tminDate.getMonth() : 1;
        const maxMonth = index === yearCount - 1 ? tmaxDate.getMonth() : 12;
        const year = tminDate.getFullYear() + index;
        return (
          <YearPanel
            key={year}
            date={date}
            minMonth={minMonth}
            maxMonth={maxMonth}
            year={year}
            onChange={(d) => {
              onChange(d);
              log('onChange');
            }}
            onScrollInitialY={(y: number) => {
              log('onActiveY');
              if (!isLoadedFn) {
                setIsLoadedFn(true);
                const wrapperDom: HTMLDivElement | null = wrapperRef.current;
                if (wrapperDom) {
                  const height = wrapperDom!.getBoundingClientRect().height / 2;
                  wrapperDom!.scrollTo(0, y - height);
                }
              }
            }}
          />
        );
      })}
    </div>
  );
};

YearMonthView.displayName = 'YearMonthView';
export default withError(YearMonthView);
