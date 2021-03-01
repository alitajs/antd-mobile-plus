
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
    onPress?: (e) => void;
    /**
     * @description 唯一标识
     */
    id: string;
}

export interface ToolBarType {
    /**
     * @description 按钮数组
     * @default []
     */
    data?: ToolButtonItemType[];
}