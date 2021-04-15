import { CSSProperties } from 'react'

type ModeType = 'scaleToFill'
    | 'scaleAspectFit'
    | 'scaleAspectFill'
    | 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';

export interface LazyImageType {
    /**
     * @description 图片展示模式
     * @description.en-US the mode of LazyImage
     * @default scaleAspectFill
     */
    mode?: ModeType;
    /**
     * @description 是否开启懒加载
     * @description.en-US Whether open lazy
     * @default true
     */
    lazy?: boolean;

    /**
     * @description 是否使用img标签, 打开后mode属性将失效
     * @description.en-US Whether use img element, the component mode property will invalid then useImg is true
     * @default false
     */
    useImg?: boolean;

    /**
     * @description 当图片未加载时的占位图
     * @default --- the placeholder of image
     */
    placeholder?: string;

    /**
     * @description 其他标签属性
     * @description.en-US other properties of html element
     * @default 
     */
    [key: string]: any;
}
