export interface SignatureType {
  /**
   * @description 底部的按钮区域可以自定义
   */
  footerNode?: React.ReactNode;

  /**
   * @description 画笔的粗细
   * @default 3
   */
  brushRadius?: number;
  /**
   * @description  画笔颜色
   * @default '#000'
   */
  penColor?: string;
  /**
   * @description 清除画布时调用
   */
  clear?: () => void;
  /**
   * @description 确定按钮事件，图片展示的 data URI
   * sinRef 可以根据需要，使用其提供的方法
   *
   */
  getSigin: (imgStr: any) => void;
  /**
   * @description 图片格式
   * @default image/png
   */
  type?: string;
  /**
   * @description 在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略
   * @default 0.92
   */
  encoderOptions?: number;
  /**
   * @description 获取当前的ref，当底部自定义时可以使用
   * sinRef.canvas.drawing.toDataURL(type, encoderOptions) 获取画布生成的图片
   *
   */
  getCanvasRef?: (ref: React.MutableRefObject<null>) => void;
  /**
   * @description 画布宽度
   * @default '100%'
   */
  canvasWidth?: number | string;
  /**
   * @description 画布高度
   * @default '100%'
   */
  canvasHeight?: number | string;
}
