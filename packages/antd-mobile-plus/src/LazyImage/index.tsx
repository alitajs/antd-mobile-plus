import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import { LazyImageType } from './PropsType';
import AutoHeightImage from './components/AutoHeightImage';
import Image from './components/Image';

const LazyImage: FC<LazyImageType> = (props) => {
  const { useImg, ...reset } = props;
  return <>{useImg ? <AutoHeightImage {...reset} /> : <Image {...reset} />}</>;
};

LazyImage.displayName = 'LazyImage';
export default withError(LazyImage);
