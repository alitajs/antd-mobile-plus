import * as React from 'react';
import AWingBlank from 'antd-mobile/lib/wing-blank';
import { withError, useTracker } from '@alitajs/tracker';
import { WingBlankPropsType } from './PropsType';
import './index.less';

export const WingBlank: React.FC<WingBlankPropsType> = (props) => {
  return <AWingBlank {...props}></AWingBlank>;
};

WingBlank.displayName = 'WingBlank';

export default withError(WingBlank);
