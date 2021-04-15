export interface TextOverflowType {
  /**
   * @description 展示的文本
   */
  text: string;

  /**
   * @description 展示文本的长度
   */
  length?: number;

  /**
   * @description 容器的最大宽度
   */
  maxWidth?: number;

  /**
   * @description 容器的标签类型
   */
  wrapper?: string;

  /**
   * @description 长度是否区分汉字和字母，默认不区分，区分为：true
   */
  strict?: boolean;
}
