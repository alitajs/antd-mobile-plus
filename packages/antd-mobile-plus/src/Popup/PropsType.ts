import { CSSProperties } from 'react'
import { BasicTarget } from 'ahooks/es/utils/dom'
import { TransitionType } from '../Transition/PropsType'


export interface PopupType {
    /**
     * @description 展示
     * @default false 
     */
    show: boolean;

    /**
     * @description 去除目标元素，只响应目标元素之外的节点
     */
    awayRef?: BasicTarget | BasicTarget[];

    /**
     * @description 关闭事件
     */
    onClose?: () => void;

    /**
     * @description 遮罩层所在区域滚动节点
     * @default document.documentElement
     */
    scrollElement?: HTMLElement

    /**
     * @description 遮罩层样式
     * @default -
     */
    overlayStyle?: CSSProperties;

    /**
     * @description 弹出框方向
     * @default down
     */
    direction?: 'up' | 'down';

    /**
     * @description 是否在点击遮罩层后关闭菜单
     * @default true
     */
    closeOnClickOverlay?: boolean;

    /**
     * @description 是否在点击遮罩层后关闭菜单
     * @default true
     */
    closeOnClickOutside?: boolean;

    /**
     * @description 弹出框类名
     */
    className?: string;

    /**
     * @description 相对起始位置偏移量
     * @default 0
     */
    offset?: number;

    /**
     * @description 弹出模式， fullscreen:全屏  relative: 相对当前控件位置弹出
     * @default  relative
     */
    popMode?: 'fullscreen' | 'relative';

    /**
     * @description 弹出层的容器样式
     */
    style?: TransitionType['style']
}