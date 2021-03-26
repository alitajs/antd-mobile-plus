export interface NewsStatisticType {
  /**
   * @description 文本
   */
  text: string;

  /**
   * @description 阅读量
   */
  readNum?: number;

  /**
   * @description 点赞数
   */
  starNum?: number;

  /**
   * @description 行内样式
   */
  style?: React.CSSProperties;

  /**
   * @description 字号
   */
  fontSize?: number;

  /**
   * @description 类名
   */
  className?: string;

  /**
   * @description 点赞状态
   */
  active?: boolean;

  /**
   * @description 点赞回调
   */
  onClick: (active: boolean) => void;

  /**
   * @description 是否显示 Star 数量
   */
  showStarNum?: boolean;
}
