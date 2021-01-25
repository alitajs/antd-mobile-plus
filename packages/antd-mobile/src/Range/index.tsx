import * as React from 'react';
import ARange from 'antd-mobile/lib/range';
import { withError, useTracker } from '@alitajs/tracker';
import { RangePropsType } from './PropsType';
import './index.less';

export const Range: React.FC<RangePropsType> = (props) => {
  const { onChange, onAfterChange, ext, ...other } = props;

  const log = useTracker(Range.displayName, {
    ext,
  });

  return (
    <ARange
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onAfterChange={(e) => {
        onAfterChange && onAfterChange(e);
        log('onAfterChange');
      }}
    >
    </ARange>
  );
};

Range.displayName = 'Range';

export default withError(Range);
