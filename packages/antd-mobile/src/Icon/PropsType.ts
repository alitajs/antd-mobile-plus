import { IconProps } from 'antd-mobile/es/icon';

export interface IconPropsType {
    /**
     * @description 内置 icon 名称 
     * @description.en-US 
     * @default 
     */
    type: IconProps['type'];
    /**
     * @description 图标大小
     * @description.en-US 
     * @default md
     */
    size?: IconProps['size'];
    /**
     * @description 图标颜色
     * @description.en-US 
     * @default '#000'
     */
    color?: IconProps['color'];

    /**
     * @description 点击事件
     * @description.en-US fire on click
     * @default 
     */
    onClick?: React.MouseEventHandler<SVGSVGElement>;

    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;

}