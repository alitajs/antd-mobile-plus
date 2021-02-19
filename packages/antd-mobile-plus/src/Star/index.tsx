/*
 * @Description:评分组件
 * @Author: qclong
 * @Date: 2021-02-18 16:49:44
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import { StarProps } from './PropsType';
import './index.less';

const prefixCls = 'alita-star';

const Star: FC<StarProps> = (props) => {
  const { score = 0, maxScore = 5, onChange = () => { }, ext } = props;
  const log = useTracker(Star.displayName, { ext });
  return <div className={prefixCls}>{
    [maxScore / 5, maxScore / 5 * 2, maxScore / 5 * 3, maxScore / 5 * 4, maxScore].map(i => <i
      key={i}
      onClick={() => {
        log(`onClick:${i}`);
        onChange(i);
      }}
      className={classnames({
        [`${prefixCls}-${i > score + maxScore / 10 ? 'default' : i == score + maxScore / 10 ? 'half' : 'light'}`]: true,
        [`${prefixCls}-item`]: true,
      })}
    ></i>)}</div>;
};

Star.displayName = 'Star';

export default withError(Star);
