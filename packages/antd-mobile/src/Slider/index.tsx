import * as React from 'react';
import ASlider from 'antd-mobile/lib/slider';
import { withError, useTracker } from '@alitajs/tracker';
import { SliderPropsType } from './PropsType';
import './index.less';

export const Slider: React.FC<SliderPropsType> = (props) => {
  const { onChange, onAfterChange, ext, ...other } = props;

  const log = useTracker(Slider.displayName, {
    ext,
  });

  return (
    <ASlider
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
    </ASlider>
  );
};

Slider.displayName = 'Slider';

export default withError(Slider);
