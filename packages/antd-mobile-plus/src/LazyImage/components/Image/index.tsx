import React, { FC, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { LazyImageType } from '../../PropsType';
import { useLazy } from '../../utils/useLazy';
import './index.less';

interface AutoHeightImageProps extends Omit<LazyImageType, 'mode' | 'useImg'> {}

const prefixCls = 'alita-autoheightimage';
const AutoHeightImage: FC<AutoHeightImageProps> = (props) => {
  const {
    src = '',
    lazy = true,
    placeholder = '',
    className,
    onClick,
    ...reset
  } = props;
  const ref = useRef(null);
  const imgSrc = useLazy(ref, src, placeholder);
  const log = useTracker(AutoHeightImage.displayName, {});
  return (
    <div className={prefixCls}>
      <img
        className={className}
        ref={ref}
        src={lazy ? imgSrc : src}
        onClick={(...e) => {
          onClick && onClick(...e);
          log('onClick');
        }}
        {...reset}
      />
    </div>
  );
};

AutoHeightImage.displayName = 'AutoHeightImage';
export default withError(AutoHeightImage);
