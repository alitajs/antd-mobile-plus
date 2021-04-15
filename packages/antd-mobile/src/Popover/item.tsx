import * as React from 'react';
import APopover from 'antd-mobile/lib/popover';
import { withError, useTracker } from '@alitajs/tracker';
import { PopoverItemPropsType } from './PropsType';
import './index.less';

const APopoverItem = APopover.Item;

export const PopoverItem: React.FC<PopoverItemPropsType> = (props) => {
  const { ext, ...reset } = props;
  const log = useTracker(PopoverItem.displayName, {
    ext,
  });
  return <APopoverItem {...reset}></APopoverItem>;
};

PopoverItem.displayName = 'PopoverItem';
export default withError(PopoverItem);
