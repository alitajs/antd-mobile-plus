import React, { FC } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import { ToolButtonItemType as ButtonType } from '../../PropsType';
import './index.less';

const prefixCls = 'alita-button';

const Button: FC<ButtonType> = ({
  type = 'default',
  text,
  onPress = () => {},
}) => {
  return (
    <div
      onClick={(e) => {
        if (type !== 'disable') {
          onPress(e);
        }
      }}
      className={classnames(prefixCls, {
        [`${prefixCls}-${type}`]: true,
      })}
    >
      {text}
    </div>
  );
};

Button.displayName = 'Button';
export default withError(Button);
