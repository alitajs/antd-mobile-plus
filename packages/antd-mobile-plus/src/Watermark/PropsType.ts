/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-19 15:21:12
 */
export interface WatermarkType {
  /**
   * @description 显示水印的文本
   */
  content: string;

  /**
   * @description 文本旋转的角度，介于 -Math.PI / 2 ~ Math.PI / 2
   */
  rotation?: number;

  /**
   * @description 字体类型
   */
  fontFamily?: string;

  /**
   * @description 文字的颜色
   */
  fontColor?: string;

  /**
   * @description 字号
   */
  fontSize?: number;

  /**
   * @description 行高
   */
  lineHeight?: number;

  /**
   * @description 间距
   */
  gap?: number;

  children: React.ReactChildren;

  style?: React.CSSProperties;
}
