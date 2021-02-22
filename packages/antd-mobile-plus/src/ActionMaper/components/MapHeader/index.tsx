/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-20 16:05:04
 */
import React, { FC } from 'react';
import './index.less';

const prefixCls = 'alita-map-header';

interface MapHeaderType {
  /**
   * 标题
   */
  title?: string;
  /**
   * 右侧组件
   */
  rightExt?: () => React.ReactNode | React.ReactNode;
}

const ActionMaper: FC<MapHeaderType> = (props) => {
  const { title = '', rightExt = () => <></> } = props;
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-title`}>{title}</div>
      <div className={`${prefixCls}-right-ext`}>{rightExt()}</div>
    </div>
  );
};

export default ActionMaper;
