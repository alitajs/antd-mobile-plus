import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import { LazyImageType } from './PropsType';
import Image from './components/Image';
import ImageDiv from './components/ImageDiv';

const LazyImage: FC<LazyImageType> = (props) => {
  const { useImg, ...reset } = props;
  return <>{useImg ? <Image {...reset} /> : <ImageDiv {...reset} />}</>;
};

LazyImage.displayName = 'LazyImage';
export default withError(LazyImage);
