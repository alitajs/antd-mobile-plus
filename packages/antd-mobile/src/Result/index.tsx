import * as React from 'react';
import AResult from 'antd-mobile/lib/result';
import { withError, useTracker } from '@alitajs/tracker';
import { ResultPropsType } from './PropsType';
import './index.less';

export const Result: React.FC<ResultPropsType> = (props) => {
  const { onButtonClick, ext, ...other } = props;

  const log = useTracker(Result.displayName, {
    ext,
  });

  return (
    <AResult
      {...other}
      onButtonClick={(e) => {
        onButtonClick && onButtonClick(e);
        log('onButtonClick');
      }}
    >
    </AResult>
  );
};

Result.displayName = 'Result';

export default withError(Result);
