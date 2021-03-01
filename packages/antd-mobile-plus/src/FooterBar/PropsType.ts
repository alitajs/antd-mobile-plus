
export interface ToolButtonItemType { 
    /**
     * @description 按钮文字
     */
    text?: string;
    /**
     * @description 按钮类型
     */
    type: 'disable' | 'primary' | 'default';
    /**
     * @description 按钮点击事件
     */
    onPress?: (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * @description 唯一标识
     */
    id: string;
}

export interface FooterBarType {
    /**
     * @description 按钮数组
     * @default []
     */
    data?: ToolButtonItemType[];
}