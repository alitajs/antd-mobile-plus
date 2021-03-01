import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface RightExtType {
  /**
   * 点击事件
   */
  onClick?: () => void;
}

const prefixCls = 'alita-right-ext';
const RightExt: FC<RightExtType> = ({ onClick = () => {} }) => {
  const log = useTracker(RightExt.displayName, {});
  return (
    <div
      className={prefixCls}
      onClick={() => {
        log('onClick');
        onClick();
      }}
    >
      <i className={`${prefixCls}-icon`}></i>
      <span className={`${prefixCls}-title`}>重新定位</span>
    </div>
  );
};

RightExt.displayName = 'RightExt';

export default withError(RightExt);
