/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-19 15:21:12
 */
import React, { FC, useState, useCallback, useEffect, useRef } from 'react';
import { withError } from '@alitajs/tracker';
import { RibbonColorType } from './PropsType';
import './index.less';

const prefixCls = 'alita-ribbon-color';

const RibbonColor: FC<RibbonColorType> = (props) => {
  const {
    height = 20,
    range = 30,
    text = '彩带组件',
    style = { },
  } = props;

  const [width, setWidth] = useState(0);

  const Ribbon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Ribbon.current?.offsetWidth) {
      setWidth(Ribbon.current?.offsetWidth);
    }
  }, []);

  const getTop = useCallback(() => {
    return (
      (range * Math.sin(Math.PI / 4) + height / 2) * Math.sin(Math.PI / 4) -
      height / 2
    );
  }, [width]);

  const getLeft = useCallback(() => {
    return (
      width -
      width / 2 -
      (range * Math.sin(Math.PI / 4) + height / 2) * Math.sin(Math.PI / 4)
    );
  }, [width])

  return (
    <div
      className={prefixCls}
      style={{
        top: `${getTop()}px`,
        left: `${getLeft()}px`,
        height: `${height}px`,
        lineHeight: `${height}px`,
        ...style,
      }}
      ref={Ribbon}
    >
      {text}
    </div>
  );
};

RibbonColor.displayName = 'RibbonColor';

export default withError(RibbonColor);
