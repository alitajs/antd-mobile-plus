import * as React from 'react';
import AProgress from 'antd-mobile/lib/progress';
import { withError, useTracker } from '@alitajs/tracker';
import { ProgressPropsType } from './PropsType';
import './index.less';

export const Progress: React.FC<ProgressPropsType> = (props) => {
  return (
    <AProgress
      {...props}
    >
    </AProgress>
  );
};

Progress.displayName = 'Progress';

export default withError(Progress);
