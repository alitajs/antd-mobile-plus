export interface RibbonColorType {
  /**
   * @description 彩带高度
   */
  height: number;

  /**
   * @description 到定点的距离
   */
  range?: number;

  /**
   * @description 文本
   */
  text?: string|React.ReactNode;

  /**
   * @description 样式对象
   */
  style?: React.CSSProperties;
}
