export interface SimpleCardType {
  /**
   * @description 是否通栏
   * @default false
   */
  full?: boolean;

  /**
   * @description 卡片标题
   */
  headerTitle?: React.ReactNode;

  /**
   * @description 卡片标题图片
   */
  headerThumb?: React.ReactNode;

  /**
   * @description 标题图片样式
   */
  headerThumbStyle?: React.CSSProperties;

  /**
   * @description 卡片标题辅助内容
   */
  headerExtra?: React.ReactNode;

  /**
   * @description 尾部内容
   */
  footerContent?: React.ReactNode;

  /**
   * @description 尾部辅助内容
   */
  footerExtra?: React.ReactNode;
}
