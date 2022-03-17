import { CSSProperties } from 'react';
import { BasicTarget } from 'ahooks/es/utils/domTarget';
import { TransitionProps } from './components/Transition';

export interface PopupType {
  /**
   * @description 展示
   * @default false
   */
  show: boolean;

  /**
   * @description 去除目标元素，只响应目标元素之外的节点
   */
  awayRef?: BasicTarget | BasicTarget[];

  /**
   * @description 关闭事件
   */
  onClose?: () => void;

  /**
   * @description 页面区域滚动节点，一般用于`type`为relative时使用
   * @default document.documentElement
   */
  scrollElement?: HTMLElement;

  /**
   * @description 弹出框方向
   * @default popup
   */
  mode?: TransitionProps['mode'];

  /**
   * @description 是否在点击遮罩层后关闭视图
   * @default true
   */
  closeOnClickOverlay?: boolean;

  /**
   * @description 是否在点击其他区域关闭视图
   * @default false
   */
  closeOnClickOutside?: boolean;

  /**
   * @description 弹出框类名
   */
  className?: string;

  /**
   * @description 相对起始位置偏移量
   * @default 0
   */
  offset?: number;

  /**
   * @description 弹出模式， fullscreen:全屏  relative: 相对当前控件位置弹出
   * @default  fullscreen
   */
  type?: 'fullscreen' | 'relative';

  /**
   * @description 容器区域的尺寸
   * @default 80%
   */
  contentSize?: CSSProperties['maxWidth'];

  /**
   * @description 层级
   */
  zIndex?: number;

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
   * @description 是否显示关闭图标	
   * @default false
   */
  closeable?: boolean;

  /**
   * @description 是否显示圆角
   * @default false
   */
  round?: boolean;

  /**
   * @description 自定义内容区域
   * @default false
   */
  custom?: boolean;
}
