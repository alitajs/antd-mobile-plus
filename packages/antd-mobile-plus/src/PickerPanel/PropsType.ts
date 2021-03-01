
export type PickerPanelLeftLabelHandle = (c: number) =>  React.ReactNode;
export type PickerPanelViewHandle = (item: any, index: number) =>  React.ReactNode;

export interface AliasPickerType { 
    /**
     * @description 列表文字 字段名
     * @default label
     */
    label?: string;

    /**
     * @description 列表id标识
     * @default id
     */
    id?: string;
} 

export interface PickerPanelType {
    /**
     * @description 传递任何类型数据数组对象,需要制定alias
     */
    data: object[];

    /**
     * @description 别名
     */
    alias?: AliasPickerType;

    /**
     * @description 删除按钮点击事件
     */
    onDelete?: (item: any, index: number) => void;

    /**
     * @description 列表点击事件
     */
    onItemClick?: (item: any, index: number) => void;

    /**
     * @description 自定义头部信息
     */
    onRenderHeaderView?: PickerPanelLeftLabelHandle;

    /**
     * @description 自定义列表单元格
     */
    onRenderItem?: PickerPanelViewHandle;
    
    /**
     * @description 左侧文字样式
     */
    onRenderLeftLabel?: PickerPanelLeftLabelHandle;

    /**
     * @description 是否展开
     * @default false
     */
    open?: boolean;

    /**
     * @description 展开或者收起回调
     */
    onToggleHandle?: (open: boolean) => void;
}