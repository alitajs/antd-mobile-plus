import { PopupType } from '../Popup/PropsType'

export interface CityPickerAlias {
    /**
     * @description 唯一标识符
     */
    id?: string;
    /**
     * @description 文字显示
     */
    label?: string;
}

export interface CityPickerNavType { 
    /**
     * @description 层级placeholder
     */
    placeholder?: string[] | string;

    /**
     * @description 初始值 id数组
     */
    initialValues?: string[] | string;
}


export interface CityPickerHeaderType { 
    /**
     * @description 弹出框标题
     */
    title?: string;

    /**
     * @description 关闭事件
     */
    onClose?: () => void;
}

export interface CityPickerListViewType { 
    /**
     * @description 选择数据项回调
     */
    onChange?: (item?: object) => void;

    /**
     * @description 数据源
     * @default []
     */
    data: object[];

    /**
     * @description 数据源项字段别名
     */
    alias?: CityPickerAlias;
}

export interface CityPickerViewType extends CityPickerHeaderType,
    CityPickerListViewType,
    CityPickerNavType {}

export interface CityPickerType extends CityPickerViewType {
    /**
     * @description 遮罩层所在区域滚动节点
     * @default document.documentElement
     */
    scrollElement?: PopupType['scrollElement'],

    /**
     * @description 展示
     * @default false 
     */
    show: PopupType['show'];

    /**
     * @description 展示结果回调
     * @default -
     */
    onFinish?: (ids: string[]) => void;

    /**
     * @description 选择的最大层级，用于触发`onFinish`事件。  当`maxDeep = 0`时，`data`元素个数为0时触发`onFinish`事件
     * @default 0
     */
    maxDeep?: number;
}