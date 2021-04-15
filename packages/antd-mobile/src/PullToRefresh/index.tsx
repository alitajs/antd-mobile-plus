import * as React from 'react';
import APullToRefresh from 'antd-mobile/lib/pull-to-refresh';
import { withError, useTracker } from '@alitajs/tracker';
import { PullToRefreshPropsType } from './PropsType';
import './index.less';

export const PullToRefresh: React.FC<
  PullToRefreshPropsType & { forwardRef: any }
> = (props) => {
  const { ext, forwardRef, ...reset } = props;

  const log = useTracker(PullToRefresh.displayName, {
    ext,
  });

  return <APullToRefresh ref={forwardRef} {...reset}></APullToRefresh>;
};

PullToRefresh.displayName = 'PullToRefresh';

export default withError(PullToRefresh, { forwardRef: true });
