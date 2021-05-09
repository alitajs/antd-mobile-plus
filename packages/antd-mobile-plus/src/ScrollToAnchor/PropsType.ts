import { CSSProperties } from 'react';

export interface AnchorItemType {
  /**
   * @description 数据项id
   * @note 必填
   */
  id: string;
  /**
   * @description 其他字段
   */
  [key: string]: any;
}
export interface ScrollToAnchorType {
  /**
   * @description 滚动区域
   * @default document.documentElement | document.body
   */
  scrollElement?: HTMLElement;
  /**
   * @description 滚动到索引回调
   */
  onScrollIndex?: (index: number, item: AnchorItemType) => void;

  /**
   * @description 数据源
   */
  data: AnchorItemType[];

  /**
   * @description 数据id前缀, 同时有多个组件是使用,防止id重复
   * @default `anchor-id`
   */
  idPrefix?: string;

  /**
   * @description 容器样式
   * @default -
   */
  style?: CSSProperties;

  /**
   * @description 容器`class`样式
   */
  className?: string;

  /**
   * @description 偏移量  nav为绝对定位时使用
   */
  offset?: number;
}
