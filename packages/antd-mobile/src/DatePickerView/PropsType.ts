import { DatePickerProps } from 'antd-mobile/es/date-picker-view/PropsType';
import { PropsType } from 'antd-mobile/es/date-picker';


export interface DatePickerViewPropsType extends DatePickerProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;
    /**
    * @description       日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month`
    * @description.en-US mode value, can be a `date` or `time` or `datetime` or `year` or `month`
    * @default `date`
    */
    mode?: DatePickerProps['mode'];
    /**
     * @description       当前选中时间
     * @description.en-US the currently selected value
     * @default 无
     */
    value?: DatePickerProps['value'];
    /**
     * @description       最小可选日期 
     * @description.en-US minimum date
     * @default `new Date(2000, 1, 1, 0, 0, 0)`
     */
    minDate?: DatePickerProps['minDate'];
    /**
     * @description      最大可选日期
     * @description.en-US maximum date
     * @default `new Date(2030, 1, 1, 23, 59, 59)` 
     */
    maxDate?: DatePickerProps['maxDate'];
    /**
     * @description      12小时制
     * @description.en-US 12 hours display mode
     * @default false
     */
    use12Hours?: PropsType['use12Hours'];
    /**
     * @description      分钟数递增步长设置
     * @description.en-US The amount of time, in minutes, between each minute item.
     * @default 1
     */
    minuteStep?: DatePickerProps['minuteStep'];
    /**
     * @description      国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置
     * @description.en-US international, can override the configuration of the global `[LocaleProvider](https://mobile.ant.design/components/locale-provider)`
     * @default 
     */
    locale?: DatePickerProps['locale'];
    /**
     * @description       是否不可用 
     * @description.en-US set disabled
     * @default false  
     */
    disabled?: DatePickerProps['disabled'];
    /**
    * @description       时间发生变化的回调函数 
    * @description.en-US change handler
    * @default
    */
    onChange?: DatePickerProps['onChange'];
    /**
     * @description       每列 picker 改变时的回调
     * @description.en-US fire when picker col change
     * @default
     */
    onValueChange?: DatePickerProps['onValueChange'];
}
