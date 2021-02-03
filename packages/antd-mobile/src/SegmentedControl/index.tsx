import * as React from 'react';
import ASegmentedControl from 'antd-mobile/lib/segmented-control';
import { withError, useTracker } from '@alitajs/tracker';
import { SegmentedControlPropsType } from './PropsType';
import './index.less';

export const SegmentedControl: React.FC<SegmentedControlPropsType> = (
  props,
) => {
  const { onChange, onValueChange, ext, ...other } = props;

  const log = useTracker(SegmentedControl.displayName, {
    ext,
  });

  return (
    <ASegmentedControl
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onValueChange={(e) => {
        onValueChange && onValueChange(e);
        log('onValueChange');
      }}
    ></ASegmentedControl>
  );
};

SegmentedControl.displayName = 'SegmentedControl';

export default withError(SegmentedControl);
