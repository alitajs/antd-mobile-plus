import { PopOverPropsType } from 'antd-mobile/es/popover';
import { PopoverItemProps } from 'antd-mobile/es/popover/Item';

export interface PopoverPropsType extends PopOverPropsType {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;

    /**
     * @description       当前显隐状态
     * @description.en-US Whether visible
     * @default bottomRight
     */
    visible?: PopOverPropsType['visible'];

    /**
     * @description      当显隐状态变化时回调函数
     * @description.en-US callback called when visiable is changed;
     */
    onVisibleChange?: PopOverPropsType['onVisibleChange'];

    /**
     * @description      enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'}
     * @description.en-US enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'}
     * @default false
     */
    placement?: PopOverPropsType['placement'];

    /**
     * @description     弹出层内容
     * @description.en-US overlay content
     * @default false
     */
    overlay: PopOverPropsType['overlay'];

    /**
     * @description     选中某选项时的回调函数 
     * @description.en-US callback called when item is selected
     * @default false
     */
    onSelect?: PopOverPropsType['onSelect'];
}

export interface PopoverItemPropsType extends PopoverItemProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;

    /**
     * @description       是否禁用
     * @description.en-US Whether disabled or not
     * @default false
     */
    disabled?: PopoverItemProps['disabled'];

    /**
     * @description       item 样式 
     * @description.en-US item style
     * @default false
     */
    style?: PopoverItemProps['style'];

    /**
     * @description       icon
     * @description.en-US  icon
     * @default false
     */
    icon?: PopoverItemProps['icon'];


    /**
     * @description       value
     * @description.en-US  value
     * @default 
     */
    value?: string;

}
