import * as React from 'react';
import AActivityIndicator from 'antd-mobile/lib/activity-indicator';
import { withError, useTracker } from '@alitajs/tracker';
import { ActivityIndicatorPropsType } from './PropsType';
import './index.less';

export const ActivityIndicator: React.FC<ActivityIndicatorPropsType> = (props) => {
  return (
    <AActivityIndicator
    {...props}
    >
    </AActivityIndicator>
  );
};

ActivityIndicator.displayName = 'ActivityIndicator';


export default withError(ActivityIndicator);
