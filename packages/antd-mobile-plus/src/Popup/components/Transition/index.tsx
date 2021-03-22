import React, { FC, CSSProperties, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

export interface TransitionProps {
  /**
   * @description 是否展示
   * @default false
   */
  show?: boolean;
  /**
   * @description 弹出方式
   * @default popup
   */
  mode: 'popup' | 'dropdown' | 'sliderLeft' | 'sliderRight' | 'alert';

  /**
   * @description 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOverlay?: boolean;

  /**
   * @description 关闭事件
   */
  onClose?: () => void;

  /**
   * @description 动画即将进入
   */
  onEnter?: () => void;

  /**
   * @description 动画已经进入
   */
  onEntered?: () => void;

  /**
   * @description 动画即将退出
   */
  onExit?: () => void;

  /**
   * @description 动画已经退出
   */
  onExited?: () => void;

  /**
   * @description 遮罩层样式
   */
  overlayStyle?: Pick<
    CSSProperties,
    'top' | 'left' | 'right' | 'bottom' | 'zIndex'
  >;

  /**
   * @description 容器的class
   */
  className?: string;

  /**
   * @description 容器的尺寸
   */
  contentSize?: CSSProperties['maxHeight'];
}

const prefixCls = 'alita-transition';
const Transition: FC<TransitionProps> = ({
  show = false,
  onClose,
  children,
  mode = 'popup',
  closeOnClickOverlay = true,
  onEnter,
  onEntered,
  onExit,
  onExited,
  overlayStyle,
  className,
  contentSize = '80%',
}) => {
  const [style, setStyle] = useState<CSSProperties>({
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  const [display, setDisplay] = useState<CSSProperties['display']>('none');

  return (
    <div
      style={{
        ...style,
        ...overlayStyle,
        display,
        overflow: 'hidden',
        transform: 'scale(1)',
      }}
    >
      <CSSTransition
        in={show}
        timeout={200}
        classNames={`${prefixCls}-overlay`}
        unmountOnExit
      >
        {(state) => {
          return (
            <div
              className={`${prefixCls}-overlay-box`}
              onClick={() => {
                if (closeOnClickOverlay) {
                  onClose && onClose();
                }
              }}
            ></div>
          );
        }}
      </CSSTransition>
      <CSSTransition
        in={show}
        timeout={200}
        classNames={`${prefixCls}-${mode.toLowerCase()}`}
        unmountOnExit
        onEnter={() => {
          onEnter && onEnter();
          setDisplay('block');
        }}
        onEntered={onEntered}
        onExit={onExit}
        onExited={() => {
          onExited && onExited();
          setDisplay('none');
        }}
      >
        {(state) => {
          return (
            <div
              className={classnames(
                `${prefixCls}-${mode.toLowerCase()}-box`,
                `${prefixCls}-wrapper`,
                {
                  [`${className}`]: !!className,
                },
              )}
              style={
                mode === 'sliderLeft' || mode === 'sliderRight'
                  ? { maxWidth: contentSize }
                  : { maxHeight: contentSize }
              }
            >
              {children}
            </div>
          );
        }}
      </CSSTransition>
    </div>
  );
};

Transition.displayName = 'Transition';
export default withError(Transition);
