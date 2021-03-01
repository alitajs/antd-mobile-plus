import React, { FC } from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

export type ZoomType = 'plus' | 'minus';

interface ZoomControlProps {
  onZoom: (z: ZoomType) => void;
}

const prefixCls = 'alita-map-zoom';
const ZoomControl: FC<ZoomControlProps> = ({ onZoom = () => {} }) => {
  const log = useTracker(ZoomControl.displayName, {});

  return (
    <div className={prefixCls}>
      <i
        className={classnames(`${prefixCls}-plus`, `${prefixCls}-item`)}
        onClick={() => {
          onZoom('plus');
          log('onClick: plus');
        }}
      ></i>
      <i
        className={classnames(`${prefixCls}-minus`, `${prefixCls}-item`)}
        onClick={() => {
          onZoom('minus');
          log('onClick: minus');
        }}
      ></i>
    </div>
  );
};

ZoomControl.displayName = 'ZoomControl';

export default withError(ZoomControl);
