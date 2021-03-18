
export interface ApprovalFlowDataType {
}

export interface ApprovalDisableType {
    disable: true;
    onClick?: (e:ApprovalFlowDataType) => void;
}

export interface ApprovalFlowType {
    /**
     * @description 选中id
     * @default data.length > 0 ? data[0].id : undefined;
     */
    activeId?: string;
    
    /**
     * @description 数据源
     * @default []
     */
    data: ApprovalFlowDataType[];

    /**
     * @description 是否不可选择
     * @default false
     */
    disable?: boolean;

    /**
     * @description 标题
     */
    title: string;
}
