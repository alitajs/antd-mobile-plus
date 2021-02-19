/*
 * @Description:评分组件
 * @Author: qclong
 * @Date: 2021-02-18 16:49:44
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import { StarType } from './PropsType';
import './index.less';

const prefixCls = 'antd-mobile-star';

const Score: FC<StarType> = (props) => {
  const { score } = props;

  const renderStarView = (
    defaultNum = 0,
    type: 'default' | 'half' | 'light',
  ) => {
    const eleArr = [];
    for (let index = 0; index < defaultNum; index++) {
      eleArr.push(
        <i
          className={classnames({
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-item`]: true,
          })}
        ></i>,
      );
    }
    return eleArr;
  };

  const renderStar = () => {
    const scoreText = `${score}`;
    const splitArr = scoreText.split('.');
    const lightNum = +splitArr[0] > 5 ? 5 : +splitArr[0];
    let half = 0;
    let defaultNum = 0;

    if (splitArr.length > 1) {
      if (splitArr[1] !== '0' && +lightNum < 5) {
        half = 1;
      }
    }
    defaultNum = 5 - (half + +lightNum);
    const lightEles = renderStarView(lightNum, 'light');
    const halfEles = renderStarView(half, 'half');
    const defaultEles = renderStarView(defaultNum, 'default');
    return lightEles.concat(halfEles).concat(defaultEles);
  };

  return <div className={prefixCls}>{renderStar()}</div>;
};

export default Score;
