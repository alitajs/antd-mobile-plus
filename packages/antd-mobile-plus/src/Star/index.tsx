import React, { FC } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import { StarProps } from './PropsType';
import './index.less';
import classNames from 'classnames';

const prefixCls = 'alita-star';

const Star: FC<StarProps> = (props) => {
  const {
    score = 0,
    disabled = false,
    maxScore = 5,
    onChange = () => {},
    ext,
  } = props;
  const log = useTracker(Star.displayName, { ext });
  return (
    <div
      className={classNames(prefixCls, {
        [`${prefixCls}-disabled`]: disabled,
      })}
    >
      {[
        maxScore / 5,
        (maxScore / 5) * 2,
        (maxScore / 5) * 3,
        (maxScore / 5) * 4,
        maxScore,
      ].map((i) => (
        <i
          key={i}
          onClick={() => {
            log(`onClick:${i}`);
            if (!disabled) {
              onChange(i);
            }
          }}
          className={classnames({
            [`${prefixCls}-${
              i > score + maxScore / 10
                ? 'default'
                : i == score + maxScore / 10
                ? 'half'
                : 'light'
            }`]: true,
            [`${prefixCls}-item`]: true,
          })}
        ></i>
      ))}
    </div>
  );
};

Star.displayName = 'Star';

export default withError(Star);
