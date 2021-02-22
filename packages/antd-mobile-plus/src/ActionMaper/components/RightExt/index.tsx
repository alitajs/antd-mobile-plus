/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-20 16:24:24
 */
import React, { FC } from 'react';
import './index.less';

interface RightExtProps {
  /**
   * 点击事件
   */
  onClick?: () => void;
}

const prefixCls = 'alita-right-ext';
const RightExt: FC<RightExtProps> = ({ onClick = () => {} }) => {
  return (
    <div className={prefixCls} onClick={onClick}>
      <i className={`${prefixCls}-icon`}></i>
      <span className={`${prefixCls}-title`}>重新定位</span>
    </div>
  );
};

export default RightExt;
