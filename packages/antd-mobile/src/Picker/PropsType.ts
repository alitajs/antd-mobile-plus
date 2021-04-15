import { AbstractPickerProps } from 'antd-mobile/es/picker/AbstractPicker';

export interface PickerPropsType extends AbstractPickerProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;

    /**
     * @description       值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层
     * @description.en-US value, the formatter is `[value1, value2, value3]`, corresponds to the level value of the data source 
     */
    value?: AbstractPickerProps['value'];

    /**
     * @description       数据源    
     * @description.en-US data source
     */
    data: AbstractPickerProps['data'];

    /**
     * @description       格式化选中目标的函数
     * @description.en-US a function that formats the selected object
     */
    format?: AbstractPickerProps['format'];

    /**
     * @description       列数
     * @description.en-US columns numbers
     */
    cols?: AbstractPickerProps['cols'];

    /**
     * @description       选中后的回调，可使用[rc-form](https://github.com/react-component/form)
     * @description.en-US Callback called when item is selected, can use [rc-form](https://github.com/react-component/form)
     */
    onChange?: AbstractPickerProps['onChange'];

    /**
     * @description       每列数据选择变化后的回调函数
     * @description.en-US trigger on each column of selected data is changed
     */
    onPickerChange?: AbstractPickerProps['onPickerChange'];

    /**
     * @description       当显隐状态变化时回调函数
     * @description.en-US visible state change callback 
     */
    onVisibleChange?: AbstractPickerProps['onVisibleChange'];

    /**
     * @description       每列样式 
     * @description.en-US each column style
     */
    itemStyle?: AbstractPickerProps['itemStyle'];

    /**
     * @description      indicator 样式
     * @description.en-US indicator style
     */
    indicatorStyle?: AbstractPickerProps['indicatorStyle'];

    /**
     * @description       通常是 `List.Item` 
     * @description.en-US usually `List.Item` 
     */
    children?: React.ReactNode;

    /**
     * @description       选中的文案
     * @description.en-US ok text
     */
    okText?: AbstractPickerProps['okText'];

    /**
     * @description       取消的文案
     * @description.en-US dismiss text
     */
    dismissText?: AbstractPickerProps['dismissText'];

    /**
     * @description       点击选中时执行的回调
     * @description.en-US fire when ok button is pressed
     */
    onOk?: AbstractPickerProps['onOk'];


    /**
     * @description      点击取消时执行的回调  
     * @description.en-US fire when dismiss button is pressed
     */
    onDismiss?: AbstractPickerProps['onDismiss'];

    /**
     * @description       大标题
     * @description.en-US title
     */
    title?: AbstractPickerProps['title'];

    /**
     * @description       Picker children 建议是 `List.Item`, 如果不是，需要是自定义组件(组件内需处理`onClick`/`extra`属性)
     * @description.en-US Picker's children is best to `List.Item`, if not, need to be a custom component (the `onClick`/`extra` props need to be handled in the component) 
     */
    extra?: AbstractPickerProps['extra'];

    /**
    * @description      是否不可用  
    * @description.en-US Whether disabled
    * @default false
    */
    disabled?: AbstractPickerProps['disabled'];

    /**
    * @description       是否联动
    * @description.en-US Whether cascade
    */
    cascade?: AbstractPickerProps['cascade'];
}
