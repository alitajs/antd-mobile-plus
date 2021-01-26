import * as React from 'react';
import AWhiteSpace from 'antd-mobile/lib/white-space';
import { withError, useTracker } from '@alitajs/tracker';
import { WhiteSpacePropsType } from './PropsType';
import './index.less';

export const WhiteSpace: React.FC<WhiteSpacePropsType> = (props) => {
  return (
    <AWhiteSpace
      {...props}
    >
    </AWhiteSpace>
  );
};

WhiteSpace.displayName = 'WhiteSpace';

export default withError(WhiteSpace);
