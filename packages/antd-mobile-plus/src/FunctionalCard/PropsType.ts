export interface FootItemProps {
  /**
   * @description 名称
   */
  name?: string;

  /**
   * @description 回调函数
   */
  onClick?: (id: string | number, item: Omit<FootItemProps, 'onClick'>) => void;

  /**
   * @description 唯一索引
   */
  key?: string|number;
}

export interface FunctionalCardType {
  /**
   * @description 图片地址
   */
  img?: string;

  /**
   * @description 标题
   */
  title?: number;

  /**
   * @description 说明
   */
  desc?: string;

  /**
   * @description 文字的颜色
   */
  foot?: Array<FootItemProps>;

  /**
   * @description 每个卡片需要的唯一值
   */
  id?: string | number;

  /**
   * @description 样式对象
   */
  style: React.CSSProperties;
}
