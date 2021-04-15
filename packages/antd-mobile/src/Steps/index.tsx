import * as React from 'react';
import ASteps from 'antd-mobile/lib/steps';
import { withError, useTracker } from '@alitajs/tracker';
import { StepsPropsType } from './PropsType';
import './index.less';

const AStep = ASteps.Step;
interface StepsFC<T> extends React.FC {
  Step?: any;
}

export const Steps: StepsFC<StepsPropsType> = ({ children, ...props }) => {
  const childrenNodes = React.Children.toArray(children);
  return <ASteps {...props}>
    {
      childrenNodes.map(child => {
        if (!React.isValidElement(child)) {
          return;
        }
        return React.cloneElement(child, {
          ...child.props
        });
      })
    }
  </ASteps>;
};
Steps.Step = AStep;
Steps.displayName = 'Steps';

export default withError(Steps);
