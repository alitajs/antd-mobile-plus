import React, { FC, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { LazyImageType } from '../../PropsType';
import { useLazy } from '../../utils/useLazy';
import './index.less';

interface ImageProps extends Omit<LazyImageType, 'useImg'> {}

const prefixCls = 'alita-image';
const Image: FC<ImageProps> = (props) => {
  const {
    src,
    className,
    lazy = true,
    mode = 'scaleAspectFill',
    style,
    placeholder,
    onClick,
    ...reset
  } = props;
  const ref = useRef(null);
  const imgSrc = useLazy(ref, src, placeholder);
  const log = useTracker(Image.displayName, {});
  return (
    <div
      style={{
        ...style,
        backgroundImage: `url(${lazy ? imgSrc : src})`,
      }}
      onClick={(...e) => {
        onClick && onClick(...e);
        log('onClick');
      }}
      ref={ref}
      className={classnames(prefixCls, {
        [`${prefixCls}-${mode}`]: true,
        [`${className}`]: !!className,
      })}
      {...reset}
    ></div>
  );
};

Image.displayName = 'Image';
export default withError(Image);
