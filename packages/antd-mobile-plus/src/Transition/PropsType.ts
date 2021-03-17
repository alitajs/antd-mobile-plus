import { CSSProperties } from 'react';
export interface CSSStyle extends CSSProperties {
  position?: 'fixed' | 'absolute';
}

export interface TransitionType {
  /**
   * @description 是否展示
   * @default false
   */
  show?: boolean;
  /**
   * @description 弹出方式
   * @default popup
   */
  mode?: 'popup' | 'dropdown' | 'sliderLeft' | 'sliderRight';
  /**
   * @description 弹出框容器style样式
   */
  style?: CSSStyle;
  /**
   * @description 动画持续时间
   * @default [0.2, 0.3]
   */
  duration?: [number, number] | number;
  /**
   * @description 动画开始延迟时间
   * @default 0
   */
  delay?: number;
  /**
   * @description 动画开始回调
   */
  onStartAnimation?: () => void;
  /**
   * @description 动画结束回调
   */
  onEndAnimation?: () => void;
  /**
   * @description 开始动画即将开始
   */
  onWillOpen?: () => void;
  /**
   * @description 开始动画动画已经结束
   */
  onOpened?: () => void;
  /**
   * @description 关闭动画即将开始
   */
  onWillClose?: () => void;
  /**
   * @description 关闭动画动画已经结束
   */
  onClosed?: () => void;
  /**
   * @description 容器的class
   */
  className?: string;
  /**
   * @description 开始位置偏移量，与`mode`有关，视图完全展开后的临界点的偏移距离
   * @default 0
   */
  startOffset?: number | string;
}
