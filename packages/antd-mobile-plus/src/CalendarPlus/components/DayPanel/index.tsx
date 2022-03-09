import React, { FC } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface DayPanelProps {
  /**
   * @description 日期文字
   */
  day: string | number;
  /**
   * @description 文字展示状态
   */
  status: 'disable' | 'nomal' | 'selected';
  /**
   * @description 点击事件
   */
  onClick: () => void;
  
  /**
   * @description 改变事件
   */
   onChange: () => void;
  
  /**
   * @description 子标题
   */
  subTitle?: string;
}

const prefixCls = 'alita-calendar-day';
const DayPanel: FC<DayPanelProps> = (props) => {
  const {
    day = '',
    subTitle = '',
    status = 'nomal',
    onClick = () => { },
    onChange = () => { }
  } = props;
  const log = useTracker(DayPanel.displayName);
  return (
    <div className={prefixCls}>
      <div
        onClick={() => {
          log(`onClick:${day}`);
          onClick();
          if (status === 'nomal') {
            onChange();
          }
        }}
        className={classnames({
          [`${prefixCls}-day`]: true,
          [`${prefixCls}-disable`]: status === 'disable',
          [`${prefixCls}-selected`]: status === 'selected',
          [`${prefixCls}-nomal`]: status === 'nomal',
        })}
      >
        <span className={`${prefixCls}-day-title`}>{day}</span>
        <span hidden={!subTitle} className={`${prefixCls}-day-subtitle`}>
          {subTitle}
        </span>
      </div>
    </div>
  );
};

DayPanel.displayName = 'DayPanel';

export default withError(DayPanel);
