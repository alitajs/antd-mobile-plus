import React, { FC, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import './index.less';

interface FilterCellType {
  /**
   * @description 是否选择
   */
  selected?: boolean;

  /**
   * @description 文字内容
   */
  text: string;

  /**
   * @description 点击事件
   */
  onClick: () => void;

  /**
   * @description 选中回调
   */
  onSelected: () => void;
}

const prefixCls = 'alita-search-cell';

const FilterCell: FC<FilterCellType> = ({
  selected = false,
  text = '',
  onSelected = () => {},
  onClick = () => {},
}) => {
  const log = useTracker(FilterCell.displayName, {});

  useEffect(() => {
    if (selected) {
      onSelected();
    }
    return () => {};
  }, [selected]);

  return (
    <div
      className={prefixCls}
      onClick={() => {
        log('onClick');
        onClick();
      }}
    >
      <div
        className={classnames({
          [`${prefixCls}-text`]: true,
          [`${prefixCls}-select`]: selected,
        })}
      >
        {text}
      </div>
      <i className={`${prefixCls}-icon`} hidden={!selected}></i>
    </div>
  );
};

FilterCell.displayName = 'FilterCell';
export default withError(FilterCell);
