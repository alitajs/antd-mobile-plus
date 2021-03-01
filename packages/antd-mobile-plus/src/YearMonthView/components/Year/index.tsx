import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import './index.less';

interface YearType {
  /**
   * @description 选中
   */
  active: boolean;
  /**
   * 文字
   */
  text: string;
}

const prefixCls = 'alita-year';
const Year: FC<YearType> = ({ active = false, text = '' }) => {
  return (
    <div
      className={classnames(prefixCls, {
        [`${prefixCls}-active`]: active,
      })}
    >
      {text}
    </div>
  );
};

Year.displayName = 'Year';
export default withError(Year);
