/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-24 14:49:08
 */

export interface LoadingType {
  /**
   * @description 遮罩颜色类型，可选值为white 或者 black
   */
  type?: 'white' | 'black';

  /**
   * @description 显示的文本
   */
  text?: string;

  /**
   * @description 加载动画
   */
  loadingStyle?: React.ReactNode;

  /**
   * @description 是否加载中
   */
  spinning?: boolean;
}
