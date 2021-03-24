import React, { FC, useMemo, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { withError, useTracker } from '@alitajs/tracker';
import Transition, { TransitionProps } from './components/Transition';
import { useClickAway, useUnmount, useEventListener } from 'ahooks';
import { PopupProps } from './PropsType';
import { overlayOrigin, useLockScroll } from './utils';
import './index.less';

const prefixCls = 'alita-popup';

const Popup: FC<PopupProps> = ({
  awayRef,
  show = false,
  onClose = () => {},
  scrollElement = document.documentElement,
  mode = 'popup',
  children,
  closeOnClickOutside = false,
  closeOnClickOverlay = true,
  offset = 0,
  contentSize,
  type = 'fullscreen',
  ...otherProps
}) => {
  const log = useTracker(Popup.displayName, {});
  const topRef = useRef(null);
  const [aOverlayStyle, setAOverlayStyle] = useState<
    TransitionProps['overlayStyle']
  >();
  useMemo(() => {
    if (show) {
      const topEle: HTMLElement | null = topRef.current;
      if (topEle) {
        const style = overlayOrigin(topEle, mode, offset || 0, type);
        setAOverlayStyle(style);
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
    if (closeOnClickOutside) {
      aClose();
    }
  }, awayRef ?? []);

  // 弹出窗锁定滚动
  useLockScroll(show, scrollElement, `${prefixCls}-flow-hidden`);
  // 页面卸载关闭
  useUnmount(aClose);
  // 历史浏览器前进或者后退操作时关闭
  useEventListener('popstate', aClose);
  console.log(aOverlayStyle);
  return (
    <div ref={topRef}>
      {ReactDOM.createPortal(
        <Transition
          mode={mode}
          onClose={aClose}
          show={show}
          contentSize={contentSize}
          closeOnClickOverlay={closeOnClickOverlay}
          overlayStyle={aOverlayStyle}
          {...otherProps}
        >
          {children}
        </Transition>,
        document.body,
      )}
    </div>
  );
};

Popup.displayName = 'Popup';
export default withError(Popup);
