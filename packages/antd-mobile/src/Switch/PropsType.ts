import { SwitchProps } from 'antd-mobile/es/switch';

export interface SwitchPropsType extends SwitchProps {
  /**
    * @description       是否默认选中
    * @description.en-US Whether is checked by default
    * @default           false
    */
  checked?: SwitchProps['checked'];
  /**
   * @description       是否不可修改
   * @description.en-US whether is disabled
   * @default           false
   */
  disabled?: SwitchProps['disabled'];
  /**
  * @description       change 事件触发的回调函数
  * @description.en-US The callback function that is triggered when the selected state changes.
  */
  onChange?: SwitchProps['onChange'];
  /**
  * @description       开关打开后的颜色
  * @description.en-US Background color when the switch is turned on.
  * @default           #4dd865
  */
  color?: SwitchProps['color'];
  /**
   * @description       switch 的 name
   * @description.en-US name of `switch`
   */
  name?: SwitchProps['name'];
  /**
   * @description       设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`
   * @description.en-US set the special style depends on platform, Options  `android`, `ios`， default to be `ios`
   * @default           `'ios'`
   */
  platform?: SwitchProps['platform'];
  /**
  * @description       click事件触发的回调函数，当switch为disabled时，入参的值始终是默认传入的checked值。
  * @description.en-US The callback function triggered by the click event, when the switch is disabled, the input value is always the checked value passed in by default.
  */
  onClick?: SwitchProps['onClick'];
  /**
  * @description       埋点自定义数据
  * @description.en-US tracker
  */
  ext?: any;
}
