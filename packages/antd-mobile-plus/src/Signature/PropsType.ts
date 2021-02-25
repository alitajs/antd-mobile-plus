
export interface SignatureType {
    /**
     * @description 直接传递给基础<canvas />元素
     */
    canvasProps?: Object;
    /**
     * @description 底部的按钮区域可以自定义
     */
    footerNode?: React.ReactNode;
    /**
     * @description 用于根据先前的速度修改新速度的重量
     * @default 0.1
     */
    velocityFilterWeight?: number;
    /**
     * @description 画笔的笔锋
     * @default 0.5
     */
    minWidth?: number;
    /**
     * @description 画笔的粗细
     * @default 2
     */
    maxWidth?: number;
    /**
     * @description  画笔颜色
     * @default 'black'
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
    getSigin: (imgStr: any, siginRef: React.MutableRefObject<null>) => void;
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
}
