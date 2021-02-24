import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import './index.less';

interface LeftItemProps {
  /**
   * 数量
   */
  count?: number;
}

const prefixCls = 'alita-pickerpanel-left';
const LeftItem: FC<LeftItemProps> = ({ count }) => {
  return (
    <div className={prefixCls}>
      已选择：<span className={`${prefixCls}-count`}>{count}</span>客户
    </div>
  );
};

LeftItem.displayName = 'LeftItem';

export default withError(LeftItem);
