import * as React from 'react';
import ASteps from 'antd-mobile/lib/steps';
import { withError, useTracker } from '@alitajs/tracker';
import { StepsPropsType } from './PropsType';
import './index.less';

export const Steps: React.FC<StepsPropsType> = (props) => {
  return <ASteps {...props}></ASteps>;
};

Steps.displayName = 'Steps';

export default withError(Steps);
