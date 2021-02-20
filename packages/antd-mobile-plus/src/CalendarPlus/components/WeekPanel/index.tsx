/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-19 18:43:44
 */
import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface WeekPanelProps {}

const prefixCls = 'alita-calendar-week';
const WeekPanel: FC<WeekPanelProps> = (props) => {
  return (
    <div className={prefixCls}>
      {['日', '一', '二', '三', '四', '五', '六'].map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default withError(WeekPanel);
