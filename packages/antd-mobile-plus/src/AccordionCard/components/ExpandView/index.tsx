import React, { FC } from 'react';
import Icon from 'antd-mobile/lib/icon';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface ExpandViewProps {
  /**
   * @description 是否展开
   */
  isExtand: boolean;

  /**
   * @description 展开回调
   */
  onChange: (isExtand: boolean) => void;
}

const prefixCls = 'alita-expandview';
const ExpandView: FC<ExpandViewProps> = ({ isExtand = false, onChange }) => {
  const log = useTracker(ExpandView.displayName, {});
  return (
    <div className={prefixCls}>
      <div
        className={`${prefixCls}-center`}
        onClick={() => {
          onChange && onChange(!isExtand);
          log('onChange');
        }}
      >
        <Icon size="xxs" type={isExtand ? 'up' : 'down'} />
      </div>
    </div>
  );
};

ExpandView.displayName = 'ExpandView';
export default withError(ExpandView);
