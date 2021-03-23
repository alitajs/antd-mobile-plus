/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-19 15:21:12
 */
import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { NewsStatisticType } from './PropsType';
import likeSvg from './assets/like.svg';
import likeActiveSvg from './assets/like-active.svg';

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
        {active ? <img src={likeActiveSvg} className={`${prefixCls}-icon-active`} /> : <img src={likeSvg} className={`${prefixCls}-icon`} />}
        {showStarNum ? <span>{starNum}</span> : null}
      </div>
    </div>
  );
};

NewsStatistic.displayName = 'NewsStatistic';

export default withError(NewsStatistic);
