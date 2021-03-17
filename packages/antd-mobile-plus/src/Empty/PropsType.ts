import { CSSProperties } from 'react';

export interface EmptyType {
  /**
   * @description type类型
   * @default nomal
   */
  type?: 'nomal' | 'noMessage' | 'network' | 'denied' | 'empty';

  /**
   * @description 图标尺寸
   * @default -
   */
  icon?: string;

  /**
   * @description 文字标题
   * @default -
   */
  title?: string;

  /**
   * @description 渲染文字下部文字
   */
  renderFooter?: React.ReactNode;

  /**
   * @description 容器class
   */
  className?: string;

  /**
   * @description 容器样式
   */
  style?: CSSProperties;
}
