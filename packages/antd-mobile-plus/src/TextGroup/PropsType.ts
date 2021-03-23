/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-23 14:07:00
 */
export interface dataItemType {
  /** 
   * @description 唯一标识
   */
  key: string;

  /** 
   * @description 文本
   */
  text: string;

  /** 
   * @description 回调
   */
  onClick?: (ket: string) => void;
}

export interface TextGroupType {
  /**
   * @description 数据源
   */
  data: Array<dataItemType>;
}
