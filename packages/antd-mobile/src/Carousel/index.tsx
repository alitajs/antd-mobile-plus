import * as React from 'react';
import ACarousel from 'antd-mobile/lib/carousel';
import { withError, useTracker } from '@alitajs/tracker';
import { CarouselPropsType } from './PropsType';
import './index.less';

export const Carousel: React.FC<CarouselPropsType> = (props) => {
  const { afterChange, easing, beforeChange, ext, ...other } = props;

  const log = useTracker(Carousel.displayName, {
    ext,
  });

  return (
    <ACarousel
      {...other}
      afterChange={(e) => {
        afterChange && afterChange(e);
        log('afterChange');
      }}
      easing={() => {
        easing && easing();
        log('easing');
      }}
      beforeChange={(a, b) => {
        beforeChange && beforeChange(a, b);
        log('beforeChange');
      }}
    ></ACarousel>
  );
};

Carousel.displayName = 'Carousel';

export default withError(Carousel);
