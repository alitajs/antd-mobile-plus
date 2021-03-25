/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-24 14:15:48
 */

export interface GradientProgressType {
  /**
   * @description 设置宽度
   */
  width?: number;

  /**
   * @description 设置高度
   */
  height?: number;

  /**
   * @description 当前进度条的值占有的百分比
   */
  percent?: number;

  /**
   * @description 整体背景色
   */
  backgroundColor?: string;

  /**
   * @description 分割线颜色
   */
  divisionColor?: string;

  /**
   * @description 渐变颜色,从上到下
   */
  linearGradient?: Array<string>;
}
