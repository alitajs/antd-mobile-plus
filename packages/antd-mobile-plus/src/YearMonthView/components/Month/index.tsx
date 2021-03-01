import React, { FC, useEffect, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import './index.less';

interface MonthType {
  /**
   * @description 选中
   */
  active: boolean;
  /**
   * 文字
   */
  text: string;

  /**
   * 点击事件
   */
  onClick?: () => void;

  /**
   * 选中颜色的Y坐标
   */
  onActiveY?: (d: number) => void;
}

const prefixCls = 'alita-month';

const Month: FC<MonthType> = ({
  active = false,
  text = '',
  onClick,
  onActiveY = () => {},
}) => {
  const monthRef = useRef(null);
  useEffect(() => {
    const dom: HTMLDivElement | null = monthRef.current;
    if (active && dom) {
      const y = dom!.getBoundingClientRect().y;
      onActiveY(y);
    }
  }, []);
  return (
    <div
      ref={monthRef}
      className={classnames(prefixCls, {
        [`${prefixCls}-active`]: active,
      })}
      onClick={onClick}
    >
      {text}
      <span>月</span>
    </div>
  );
};

Month.displayName = 'Month';
export default withError(Month);
