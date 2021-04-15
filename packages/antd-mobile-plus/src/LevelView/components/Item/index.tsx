import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { LevelViewItemType, LevelViewType } from '../../PropsType';
import classNames from 'classnames';
import './index.less';

interface ItemProps {
  item: LevelViewItemType;
  onSelect: LevelViewType['onSelect'];
  isActive: boolean;
}

const prefixCls = 'alita-item';
const Item: FC<ItemProps> = ({ item, onSelect, isActive }) => {
  const log = useTracker(Item.displayName, {});
  return (
    <div
      className={`${prefixCls}`}
      onClick={() => {
        log('onSelect');
        onSelect && onSelect(item);
      }}
    >
      <div
        className={classNames(`${prefixCls}-btn`, {
          [`${prefixCls}-active`]: isActive,
        })}
      >
        {item.label}
      </div>
      <div className={`${prefixCls}-sub`} hidden={!item.subLabel}>
        {item.subLabel}
      </div>
      <div className={`${prefixCls}-date`} hidden={!item.date}>
        {item.date}
      </div>
    </div>
  );
};

Item.displayName = 'Item';
export default withError(Item);
