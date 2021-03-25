import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { NewsStatisticType } from './PropsType';
import './index.less';

const prefixCls = 'alita-news-statistic';

const NewsStatistic: FC<NewsStatisticType> = (props) => {
  const {
    text = '阅读',
    readNum = 0,
    starNum = 0,
    active,
    onClick,
    showStarNum = true,
  } = props;

  const log = useTracker(NewsStatistic.displayName, {});

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-read`}>
        {text}
        <span>{readNum}</span>
      </div>
      <div className={`${prefixCls}-star`} onClick={() => {log('news-statistic-starClick');onClick && onClick(!active)}}>
        {active ? <i className={classnames(`${prefixCls}-icon`, `${prefixCls}-icon-active-like`)}></i> : <i className={classnames(`${prefixCls}-icon`, `${prefixCls}-icon-like`)}></i>}
        {showStarNum ? <span>{starNum}</span> : null}
      </div>
    </div>
  );
};

NewsStatistic.displayName = 'NewsStatistic';

export default withError(NewsStatistic);
