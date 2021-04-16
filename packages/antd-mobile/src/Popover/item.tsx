import * as React from 'react';
import APopover from 'antd-mobile/lib/popover';
import { withError, useTracker } from '@alitajs/tracker';
import { PopoverItemPropsType } from './PropsType';
import './index.less';

const APopoverItem = APopover.Item;

interface PopoverItemFC<T> extends React.FC<T> {
  myName?: string;
}

export const PopoverItem: PopoverItemFC<PopoverItemPropsType> = (props) => {
  const { ext, ...reset } = props;
  return <APopoverItem {...reset}></APopoverItem>;
};

PopoverItem.displayName = 'PopoverItem';
// popoverItem 组件判断MyName是PopoverItem才响应点击事件  fix: can not fire when the event of onSelect
PopoverItem.myName = 'PopoverItem';
export default withError(PopoverItem);
