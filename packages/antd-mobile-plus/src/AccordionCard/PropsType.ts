import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
export interface AccordionCardType {

    /**
     * @description 是否展开
     */
    isExtand: boolean;

    /**
     * @description 展开回调
     */
    onChange: (isExtand: boolean) => void;

    /**
     * @description 标题
     * @default ''
     */
    title: string;

    /**
     * @description 扩展
     * @default 
     */
    extra?: React.ReactNode;

    /**
     * @description 组件已经收起
     */
    onExited: CSSTransitionProps['onExited'];

    /**
     * @description 组件已经展开
     */
    onEntered: CSSTransitionProps['onEntered'];

}
