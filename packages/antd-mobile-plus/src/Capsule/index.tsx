import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { CapsuleType } from './PropsType';
import './index.less';

const prefixCls = 'alita-capsule';
const Capsule: FC<CapsuleType> = ({
  onPress,
  disable,
  type,
  size,
  text,
  className,
}) => {
  const log = useTracker(Capsule.displayName, {});
  return (
    <div
      className={classnames(
        prefixCls,
        `${prefixCls}-${type}`,
        `${prefixCls}-${size}`,
        {
          [`${prefixCls}-disable`]: disable,
          [`${className}`]: !!className,
        },
      )}
      onClick={() => {
        if (!disable) {
          log('onPress');
          onPress && onPress();
        }
      }}
    >
      {text}
    </div>
  );
};

Capsule.displayName = 'Capsule';
Capsule.defaultProps = {
  size: 'md',
  disable: false,
  type: 'ghost',
};
export default withError(Capsule);
