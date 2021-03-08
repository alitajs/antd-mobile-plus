import React, { FC, useState, useEffect, useMemo, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { TransitionType } from './PropsType';
import { bemStyle, useTimeout, getTransition } from './utils';
import { useUnmount } from 'ahooks';
import './index.less';

const prefixCls = 'alita-transition';
const Transition: FC<TransitionType> = ({
  style = {},
  mode = 'popup',
  className,
  show = false,
  duration = [0.3, 0.2],
  delay = 0,
  onStartAnimation = () => {},
  onEndAnimation = () => {},
  onWillOpen = () => {},
  onWillClose = () => {},
  onOpened = () => {},
  onClosed = () => {},
  children,
  startOffset = 0,
}) => {
  const timer = useRef<NodeJS.Timeout | null>();
  const [isInitial, setIsInitial] = useState(true);
  const initialStyle = {
    position: style.position ?? 'fixed',
    ...style,
  };

  const [aStyle, setAStyle] = useState<TransitionType['style']>(initialStyle);

  // 配置初始样式
  const configInitalStyle = (animation: boolean) => {
    const otherStyle = bemStyle(mode, 'close', startOffset);
    let bStyle = {
      ...otherStyle,
      ...initialStyle,
    };
    if (animation) {
      bStyle = Object.assign(
        bStyle,
        getTransition(duration, delay, true, 'transform'),
      );
    }
    setAStyle(bStyle);
  };

  // 配置结束样式
  const configEndStyle = () => {
    const otherStyle = bemStyle(mode, 'open', startOffset);
    const bStyle = {
      ...otherStyle,
      ...getTransition(duration, delay, false, 'transform'),
      ...initialStyle,
    };
    setAStyle(bStyle);
  };

  const openAnimation = () => {
    onStartAnimation();
    onWillOpen();
    configEndStyle();
    clearTimeoutFn();
    timer.current = useTimeout(
      () => {
        onOpened();
        onEndAnimation();
      },
      duration,
      show,
      delay,
    );
  };

  const closeAnimation = () => {
    onStartAnimation();
    onWillClose();
    configInitalStyle(true);
    clearTimeoutFn();
    timer.current = useTimeout(
      () => {
        onClosed();
        onEndAnimation();
      },
      duration,
      show,
      delay,
    );
  };

  const clearTimeoutFn = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useUnmount(() => {
    clearTimeoutFn();
  });

  useEffect(() => {
    if (isInitial && show === false) {
      setIsInitial(false);
      return;
    }
    setIsInitial(false);
    clearTimeoutFn();
    timer.current = useTimeout(
      () => {
        show ? openAnimation() : closeAnimation();
      },
      0,
      show,
      delay,
    );
  }, [show]);

  useMemo(() => {
    configInitalStyle(false);
  }, [mode]);

  const log = useTracker(Transition.displayName, {});
  return (
    <div
      style={aStyle}
      className={classnames(prefixCls, {
        className: !!className,
      })}
    >
      {children}
    </div>
  );
};

Transition.displayName = 'Transition';
export default withError(Transition);
