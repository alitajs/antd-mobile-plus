import { IPickerView } from 'antd-mobile/es/picker-view/PickerView';

export interface PickerViewPropsType extends IPickerView {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;

    /**
     * @description       数据源 `Array<{value, label}>` / `Array<Array<{value, label}>>`
     * @description.en-US dataSource `Array<{value, label}>` / `Array<Array<{value, label}>>`
     * @default []
     */
    data?: IPickerView['data'];

    /**
     * @description       值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value
     * @description.en-US value, the formatter is `[value1, value2, value3]`, corresponds to the level value of the data source
     * @default []
     */
    value?: IPickerView['value'];

    /**
     * @description    是否级联	   
     * @description.en-US Whether is cascade mode
     * @default []
     */
    cascade?: IPickerView['cascade'];

    /**
     * @description    列数	   
     * @description.en-US columns count
     * @default 3
     */
    cols?: IPickerView['cols'];

    /**
     * @description    选中后的回调，可使用[rc-form](https://github.com/react-component/form) 
     * @description.en-US selected callback function, , can use [rc-form](https://github.com/react-component/form)
     * @default []
     */
    onChange?: IPickerView['onChange'];

    /**
     * @description    样式前缀
     * @description.en-US class prefix
     * @default []
     */
    prefixCls?: IPickerView['prefixCls'];

    /**
     * @description    picker 样式前缀
     * @description.en-US picker class prefix
     * @default []
     */
    pickerPrefixCls?: IPickerView['pickerPrefixCls'];

    /**
     * @description    每列样式 
     * @description.en-US column style
     * @default []
     */
    itemStyle?: IPickerView['itemStyle'];

    /**
     * @description    indicator 样式 
     * @description.en-US the style of indicator
     * @default []
     */
    indicatorStyle?: IPickerView['indicatorStyle'];

}
