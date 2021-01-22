import * as React from 'react';
import AActivityIndicator from 'antd-mobile/lib/activity-indicator';
import { withError, useTracker } from '@alitajs/tracker';
import { ActivityIndicatorPropsType } from './PropsType';
import './index.less';

export const ActivityIndicator: React.FC<ActivityIndicatorPropsType> = (props) => {
  const {...other } = props;
  return (
    <AActivityIndicator
    {...other}
    >
    </AActivityIndicator>
  );
};

ActivityIndicator.displayName = 'ActivityIndicator';


export default withError(ActivityIndicator);
