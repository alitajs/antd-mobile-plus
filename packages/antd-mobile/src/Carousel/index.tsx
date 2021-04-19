import * as React from 'react';
import ACarousel from 'antd-mobile/lib/carousel';
import { withError, useTracker } from '@alitajs/tracker';
import { CarouselPropsType } from './PropsType';
import './index.less';

export const Carousel: React.FC<CarouselPropsType> = (props) => {
  const { afterChange, beforeChange, children, ext, ...other } = props;
  const log = useTracker(Carousel.displayName, {
    ext,
  });

  return (
    <ACarousel
      afterChange={(e) => {
        afterChange && afterChange(e);
        log('afterChange');
      }}
      beforeChange={(a, b) => {
        beforeChange && beforeChange(a, b);
        log('beforeChange');
      }}
      {...other}
    >
      {children}
    </ACarousel>
  );
};

Carousel.displayName = 'Carousel';

export default withError(Carousel);
