
export interface TaskPanelItemType { 
    /**
     *  @description 任务单id
     */
    id: string;

    /**
     * @description 任务单名称
     */
    label: string;

    /**
     * @description 任务单数量
     */
    count: number | string;
}

export interface TaskPanelDataType { 
    /**
     *  @description 任务id
     */
    id: string;

    /**
     *  @description 任务名称
     */
    taskName: string;

    /**
     *  @description 任务子项
     */
    taskInfos: TaskPanelItemType[];
}

export interface TaskPanelType {
    /**
     * @description 数据源
     */
    data: TaskPanelDataType[];

    /**
     * @description 选择事件回调
     */
    onSelected: (item: TaskPanelItemType) => void;

    /**
     * @description 选中id
     */
    selectId?: string;
}