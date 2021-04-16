import * as React from 'react';
import APopover from 'antd-mobile/lib/popover';
import { withError, useTracker } from '@alitajs/tracker';
import { PopoverPropsType } from './PropsType';
import PopoverItem from './item';
import './index.less';

interface PopoverFC<T> extends React.FC<T> {
  Item: typeof PopoverItem;
}

export const Popover: PopoverFC<PopoverPropsType> = (props) => {
  const { ext, onSelect, onVisibleChange, children, ...reset } = props;
  const log = useTracker(Popover.displayName, {
    ext,
  });
  return (
    <APopover
      onSelect={(...e) => {
        console.log('eeee', e);
        onSelect && onSelect(...e);
        log('onSelect');
      }}
      onVisibleChange={(...e) => {
        onVisibleChange && onVisibleChange(...e);
        log('onVisibleChange');
      }}
      {...reset}
    >
      {children}
    </APopover>
  );
};

Popover.displayName = 'Popover';
Popover.Item = PopoverItem;
export default withError(Popover);
