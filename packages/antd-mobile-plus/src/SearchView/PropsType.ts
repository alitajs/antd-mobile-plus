
/*
 * @Description: 
 * @Author: qclong
 * @Date: 2021-02-22 16:01:15
 */

export interface SearchFilterDataType { 
    label: string;
    value: string;
}

export interface SearchViewType { 
    /**
     * @description 展示左侧筛选框
     * @default false
     */
    showLeft?: boolean;

    /**
     * @description 筛选框数据源
     */
    filterData?: SearchFilterDataType[];

    /**
     * @description 选中某个数据
     * @default filterData[0]
     */
    filterValue?: string;

    /**
     * @description 筛选条件修改时调用， 与`onFilterSelected`的区别是：只有用户点击选中时才回调
     */
    onFilterChange?: (e: SearchFilterDataType) => void;

    /**
     * @description 筛选条件选中时调用，与`onFilterChange`的区别是 初始化选中也会回调
     */
    onFilterSelected?: (e: SearchFilterDataType) => void;

    /**
     *  @description 搜索框文字发生变化
     */
    onChange?: (v: string) => void;

    /**
     * @description 搜索框文字占位符
     */
    placeholder?: string;

    /**
     * @description 搜索框初始化文字内容
     */
    initalzeValue?: string;

    /**
     * @description 搜索框最大文字长度
     */
    maxLength?: number;

    /**
     * @description 搜索框点击搜索按钮
     */
    onSearch?: (v: string) => void;

    /**
     * @description 搜索框聚焦时
     */
    onFocus?: (v: string) => void;

    /**
     * @description 搜索框失去焦点时
     */
    onBlur?: (v: string) => void;

    /**
     * @description input类型
     * @default `text`
     */
    type?: string;

}