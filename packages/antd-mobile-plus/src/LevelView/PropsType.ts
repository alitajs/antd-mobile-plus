export interface LevelViewItemType {
    /**
     * @description tag文字
     */
    label: string;

    /**
     * @description 唯一标识
     */
    value: string;

    /**
     * @description 时间
     */
    date?: string;

    /**
     * @description 子tag文字
     */
    subLabel?: string;
    
}

export interface LevelBodyProps {
    /**
     * @description 数据列表
     */
    data: LevelViewItemType[];

    /**
     * @description 选中id
     */
    selectId?: string;

    /**
     * @description 点击时间回调
     */
    onSelect?: (e: LevelViewItemType) => void;
}

export interface LevelViewType extends LevelBodyProps {
    /**
     * @description 文字标题
     */
    title?: string;

    /**
     * @description 底部文字按钮
     */
    btnText?: string;

    /**
     * @description 是否展示底部按钮
     * @default true
     */
    showFooter?: boolean;

    /**
     * @description 自定义右侧视图
     */
    rightExtra?: React.ReactNode;

    /**
     * @description 底部按钮被点击
     */
    onFooterClick?: () => void;
}
