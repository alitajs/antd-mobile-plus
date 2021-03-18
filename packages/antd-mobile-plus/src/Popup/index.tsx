import React, { FC, useMemo, useState, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Transition from '../Transition';
import classnames from 'classnames';
import { useClickAway, useUnmount, useEventListener } from 'ahooks';
import { PopupType } from './PropsType';
import { overlayOrigin, useLockScroll } from './utils';
import './index.less';

const prefixCls = 'alita-popup';

const Popup: FC<PopupType> = ({
  awayRef,
  show = false,
  onClose = () => {},
  scrollElement = document.documentElement || document.body,
  overlayStyle = {},
  direction = 'down',
  children,
  closeOnClickOutside = true,
  closeOnClickOverlay = true,
  offset = 0,
  popMode = 'relative',
  onClosed = () => {},
  ...transitionProps
}) => {
  const log = useTracker(Popup.displayName, {});
  const topRef = useRef(null);
  const overlayRef = useRef(null);
  const [overlayShow, setOverlayShow] = useState(show);
  const [aOverlayStyle, setAOverlayStyle] = useState({
    top: 0,
    bottom: 0,
  });
  useMemo(() => {
    if (show) {
      const topEle: HTMLElement | null = topRef.current;
      if (topEle) {
        setAOverlayStyle(
          overlayOrigin(scrollElement, topEle, direction, offset || 0, popMode),
        );
      }
    }
    return () => {};
  }, [show]);

  const aClose = () => {
    log('onClose');
    onClose();
  };
  // 点击awayRef之外的区域关闭弹出框
  useClickAway((e) => {
    const isOverlay = e.target === overlayRef.current;
    if (
      (closeOnClickOutside && closeOnClickOverlay) ||
      (isOverlay && closeOnClickOverlay) ||
      (!isOverlay && closeOnClickOutside)
    ) {
      aClose();
    }
  }, awayRef ?? []);

  // 弹出窗锁定滚动
  useLockScroll(show, scrollElement, `${prefixCls}-flow-hidden`);
  // 页面卸载关闭
  useUnmount(aClose);
  // 历史浏览器前进或者后退操作时关闭
  useEventListener('popstate', aClose);
  return (
    <div style={{ transform: 'scale(1)' }}>
      <div ref={topRef} className="topref"></div>
      <div
        style={{ ...aOverlayStyle }}
        className={classnames(prefixCls, {
          [`${prefixCls}-show`]: show,
        })}
      >
        <div
          ref={overlayRef}
          hidden={!overlayShow}
          className={classnames(`${prefixCls}-overlay`, {
            [`${prefixCls}-overlay-show`]: show,
          })}
          onClick={(e) => e.stopPropagation()}
        ></div>
        <Transition
          {...transitionProps}
          style={{ position: 'absolute' }}
          show={show}
          mode={direction === 'down' ? 'dropdown' : 'popup'}
          onWillOpen={() => {
            setOverlayShow(true);
          }}
          onClosed={() => {
            setOverlayShow(false);
            onClosed();
          }}
        >
          {children}
        </Transition>
      </div>
    </div>
  );
};

Popup.displayName = 'Popup';
export default withError(Popup);
