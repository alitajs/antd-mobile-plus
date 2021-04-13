import { ModalProps } from 'antd-mobile/es/modal/Modal';

export interface ModalPropsType extends ModalProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     * @default 
     */
    ext?: any;

    /**
     * @description       Modal 完全关闭后的回调
     * @description.en-US Specify a function that will be called when Modal is closed completely
     * @default 
     */
    afterClose?: () => void;

    /**
     * @description       对话框是否展示
     * @description.en-US whether a modal dialog is visible or not
     * @default false
     */
    visible: ModalProps['visible'];

    /**
     * @description       是否显示关闭按钮
     * @description.en-US whether the close button is visible or not
     * @default false
     */
    closable?: ModalProps['closable'];

    /**
     * @description       点击蒙层是否允许关闭
     * @description.en-US whether to close the modal dialog when clicked mask of it
     * @default true
     */
    maskClosable?: ModalProps['maskClosable'];

    /**
     * @description       点击 x 或 mask 回调
     * @description.en-US callback called when clicked close icon 'x' or mask of it
     * @default true
     */
    onClose?: ModalProps['onClose'];

    /**
     * @description       是否背景透明
     * @description.en-US transparent mode or full screen mode 
     * @default false
     */
    transparent?: ModalProps['transparent'];

    /**
     * @description       是否弹窗模式
     * @description.en-US popup mode
     * @default false
     */
    popup?: ModalProps['popup'];

    /**
    * @description       可选: 'slide-down / up' / 'fade' / 'slide' 
    * @description.en-US Options: 'slide-down / up' / 'fade' / 'slide'
    * @default false
    */
    animationType?: ModalProps['animationType'];

    /**
    * @description       标题
    * @description.en-US title
    * @default false
    */
    title?: ModalProps['title'];

    /**
    * @description      底部内容
    * @description.en-US footer content
    * @default false
    */
    footer?: ModalProps['footer'];

    /**
    * @description      设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`
    * @description.en-US set the special style depends on platform, options is `android`, `ios`, default `ios`
    * @default ios
    */
    platform?: ModalProps['platform'];

    /**
    * @description      Modal 主内容动画 className 
    * @description.en-US Modal animation css class name
    * @default ios
    */
    transitionName?: ModalProps['transitionName'];

    /**
    * @description      mask 动画 className
    * @description.en-US mask animation css class name
    * @default ios
    */
    maskTransitionName?: ModalProps['maskTransitionName'];

    /**
    * @description     手动设置 Modal 的 className
    * @description.en-US set modal class name
    * @default ios
    */
    className?: ModalProps['className'];

    /**
    * @description     手动设置 Modal wrap 的 className
    * @description.en-US set modal wrap class name
    * @default ios
    */
    wrapClassName?: ModalProps['wrapClassName'];
}
