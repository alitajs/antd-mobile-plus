import * as React from 'react';
import ASwipeAction from 'antd-mobile/lib/swipe-action';
import { withError, useTracker } from '@alitajs/tracker';
import { SwipeActionPropsType } from './PropsType';
import './index.less';

export const SwipeAction: React.FC<SwipeActionPropsType> = (props) => {

  const { onOpen, onClose, ext, ...other } = props;

  const log = useTracker(SwipeAction.displayName, {
    ext,
  });

  return (
    <ASwipeAction
      {...other}
      onOpen={(e) => {
        onOpen && onOpen(e);
        log('onOpen');
      }}
      onClose={(e) => {
        onClose && onClose(e);
        log('onClose');
      }}
    >
    </ASwipeAction>
  );
};

SwipeAction.displayName = 'SwipeAction';

export default withError(SwipeAction);
