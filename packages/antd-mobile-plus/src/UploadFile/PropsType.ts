export type FileType = 'excel' | 'doc' | 'ppt' | 'image' | 'other';
export type FileClickFn = (index: number, file:UploadFileDataType) => void;
export interface UploadFileDataType {
    /**
     * @description 文件类型
     */
    type: FileType;
    /**
     * @description 文件名称
     */
    name: string;
    /**
     * @description 文件id
     */
    id: string;

    /**
     * @description 文件
     * 
     */
    file?: File;
}

export interface UploadFileType {
    /**
     * @description 文件类型
     * @default 默认接受所有类型
     */
    accept?: string;

    /**
     * @description 是否不可编辑
     * @default false
     */
    disable?: boolean;

    /**
     * @description 模块标题
     * @default 附件上传
     */
    title?: string;

    /**
     * @description 数据源 
     * @default []
     */
    initialData?: UploadFileDataType[];

    /**
     * @description 删除点击事件
     * @default -
     */
    onDelete?: FileClickFn;

    /**
     * @description 预览点击事件
     * @default -
     */
    onPreview?: FileClickFn;
    
    /**
     * @description 每行点击事件
     * @default -
     */
    onRowClick?: FileClickFn;

    /**
     * @description 是否可以多选
     * @default true
     */
    multiple?: boolean;
}