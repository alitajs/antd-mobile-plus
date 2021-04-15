import React, { FC } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface HeadPanelProps {
  /**
   * @description 中间文字的标题
   */
  title?: string;
  /**
   * @description 上一年点击事件回调
   */
  onPreYear?: () => void;
  /**
   * @description 上一月点击事件回调
   */
  onPreMonth?: () => void;
  /**
   * @description 下一月点击事件回调
   */
  onNextMonth?: () => void;
  /**
   * @description 下一年点击事件回调
   */
  onNextYear?: () => void;
}

const prefixCls = 'alita-calendar-header';

const HeadPanel: FC<HeadPanelProps> = (props) => {
  const {
    title = '',
    onPreYear = () => {},
    onPreMonth = () => {},
    onNextMonth = () => {},
    onNextYear = () => {},
  } = props;
  const log = useTracker(HeadPanel.displayName, {});
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-items`}>
        <div
          className={classnames({
            [`${prefixCls}-year-pre`]: true,
            [`${prefixCls}-btn`]: true,
          })}
          onClick={() => {
            log('onClick: preYear');
            onPreYear();
          }}
        ></div>
        <div
          className={classnames({
            [`${prefixCls}-month-pre`]: true,
            [`${prefixCls}-btn`]: true,
          })}
          onClick={() => {
            log('onClick: preMonth');
            onPreMonth();
          }}
        ></div>
      </div>
      <div className={`${prefixCls}-title`}>{title}</div>
      <div className={`${prefixCls}-items`}>
        <div
          className={classnames({
            [`${prefixCls}-month-next`]: true,
            [`${prefixCls}-btn`]: true,
          })}
          onClick={() => {
            log('onClick: nextMonth');
            onNextMonth();
          }}
        ></div>
        <div
          className={classnames({
            [`${prefixCls}-year-next`]: true,
            [`${prefixCls}-btn`]: true,
          })}
          onClick={() => {
            log('onClick: nextYear');
            onNextYear();
          }}
        ></div>
      </div>
    </div>
  );
};

HeadPanel.displayName = 'HeadPanel';

export default withError(HeadPanel);
