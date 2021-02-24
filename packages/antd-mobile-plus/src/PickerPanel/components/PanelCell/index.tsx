import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface PanelCellProps {
  /**
   * @description 文字
   */
  label: string;
  /**
   * @description item点击事件
   */
  onClick?: () => void;
  /**
   * @description 删除按钮事件
   */
  onDelete?: () => void;
}

const prefixCls = 'alita-pickerpanel-cell';
const PanelCell: FC<PanelCellProps> = ({
  label = '',
  onClick = () => {},
  onDelete = () => {},
}) => {
  const log = useTracker(PanelCell.displayName, {});
  return (
    <div
      className={prefixCls}
      onClick={() => {
        onClick();
        log('onItemClick');
      }}
    >
      <div className={`${prefixCls}-label`}>{label}</div>
      <div
        className={`${prefixCls}-delete`}
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
          log('onDelete');
        }}
      ></div>
    </div>
  );
};

PanelCell.displayName = 'PanelCell';

export default withError(PanelCell);
