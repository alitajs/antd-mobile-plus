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
      easing={(e) => {
        easing && easing(e);
        log('easing');
      }}
      beforeChange={(e) => {
        beforeChange && beforeChange(e);
        log('beforeChange');
      }}
    >
    </ACarousel>
  );
};

Carousel.displayName = 'Carousel';


export default withError(Carousel);
