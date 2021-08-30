import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import WeekPanel from '../WeekPanel';
import { BaseCalendarType } from '../../PropsType';
import './index.less';

interface HeaderProps {
  title: string;
  subtitle: string;
  showTitle: boolean;
  showSubtitle: boolean;
  firstDayOfWeek: BaseCalendarType['firstDayOfWeek'];
  onClickSubtitle: () => void;
}

const prefixCls = 'alita-calendar_header';
const Header: FC<HeaderProps> = (props) => {
  const {
    showTitle,
    title,
    subtitle,
    showSubtitle,
    onClickSubtitle,
    firstDayOfWeek,
  } = props;
  const renderTitle = () => {
    if (showTitle) {
      return <div className={`${prefixCls}-header-title`}>{title}</div>;
    }
    return null;
  };

  const renderSubtitle = () => {
    if (showSubtitle) {
      return (
        <div
          className={`${prefixCls}-header-subtitle`}
          onClick={onClickSubtitle}
        >
          {subtitle}
        </div>
      );
    }
    return null;
  };

  const renderWeekDays = () => <WeekPanel firstDayOfWeek={firstDayOfWeek} />;

  return (
    <div className={prefixCls}>
      {renderTitle()}
      {renderSubtitle()}
      {renderWeekDays()}
    </div>
  );
};

Header.displayName = 'Header';
export default withError(Header);
