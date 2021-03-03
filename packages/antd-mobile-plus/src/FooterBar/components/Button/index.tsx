import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import { ToolButtonItemType as ButtonType } from '../../PropsType';
import './index.less';

const prefixCls = 'alita-button';

const Button: FC<ButtonType> = ({
  type = 'default',
  text,
  onPress = () => {},
  id,
}) => {
  const log = useTracker(Button.displayName, {});
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={(e) => {
        if (type !== 'disable') {
          onPress(e);
          log(`onPress:${id}`);
        }
      }}
      onTouchStart={() => {
        if (type !== 'disable') {
          log(`onTouchStart:${id}`);
          setActive(true);
        }
      }}
      onTouchEnd={() => {
        if (type !== 'disable') {
          log(`onTouchEnd:${id}`);
          setActive(false);
        }
      }}
      onTouchCancel={() => {
        if (type !== 'disable') {
          log(`onTouchCancel:${id}`);
          setActive(false);
        }
      }}
      className={classnames(prefixCls, {
        [`${prefixCls}-${type}`]: true,
        [`${prefixCls}-active`]: active,
      })}
    >
      {text}
    </div>
  );
};

Button.displayName = 'Button';
export default withError(Button);
