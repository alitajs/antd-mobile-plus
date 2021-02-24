/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-24 09:17:55
 */
import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { PickerPanelLeftLabelHandle } from '../../PropsType';
import LeftItem from './leftItem';
import './index.less';

interface HeaderViewProps {
  count?: number;
  isOpen?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onRenderLeftLabel?: PickerPanelLeftLabelHandle;
}

const prefixCls = 'alita-picker-headerview';
const HeaderView: FC<HeaderViewProps> = ({
  isOpen = false,
  onClick = () => {},
  count = 0,
  onRenderLeftLabel = (c) => <LeftItem count={c} />,
}) => {
  const log = useTracker(HeaderView.displayName, {});
  return (
    <div className={prefixCls}>
      {onRenderLeftLabel(count)}
      <div
        className={`${prefixCls}-right`}
        onClick={(e) => {
          log('onToggleHandle');
          onClick(e);
        }}
      >
        {isOpen ? '收起' : '展开'}
      </div>
    </div>
  );
};

HeaderView.displayName = 'HeaderView';
export default withError(HeaderView);
