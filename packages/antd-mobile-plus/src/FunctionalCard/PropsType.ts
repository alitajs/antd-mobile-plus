/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-24 11:05:08
 */

export interface FootItemProps {
  name?: string;
  onClick?: (id: string | number, item: Omit<FootItemProps, 'onClick'>) => void;
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

  style: React.CSSProperties;
}
