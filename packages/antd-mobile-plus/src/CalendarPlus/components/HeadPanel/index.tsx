/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-19 17:42:18
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface HeadPanelProps {
  title?: string;
  onPreYear?: () => void;
  onPreMonth?: () => void;
  onNextMonth?: () => void;
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
