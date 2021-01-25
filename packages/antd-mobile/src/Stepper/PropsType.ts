import { StepProps } from 'antd-mobile/es/stepper';

export interface StepperPropsType extends StepProps {
  /**
    * @description       最小值
    * @description.en-US Specifies the minimum value
    * @default           Infinity
    */
  min?: StepProps['min'];
  /**
   * @description       最大值
   * @description.en-US Specifies the maximum value
   * @default           Infinity
   */
  max?: StepProps['max'];
  /**
  * @description       当前值
  * @description.en-US Specifies the value of the `Stepper`
  */
  value?: StepProps['value'];
  /**
   * @description       每次改变步数，可以为小数
   * @description.en-US Specifies the legal number intervals
   * @default           1
   */
  step?: StepProps['step'];
  /**
   * @description       初始值
   * @description.en-US Specifies the defaultValue of the `Stepper`
   */
  defaultValue?: StepProps['defaultValue'];
  /**
  * @description       变化时回调函数
  * @description.en-US Called when value of the `Stepper` changed
  */
  onChange?: StepProps['onChange'];
  /**
   * @description       禁用
   * @description.en-US Specifies the `Stepper` should be disabled
   * @default           false
   */
  disabled?: StepProps['disabled'];
  /**
   * @description       input 只读
   * @description.en-US Specifies the `Stepper` is read only
   * @default           false
   */
  readOnly?: StepProps['readOnly'];
  /**
   * @description       是否显示数值，默认不显示
   * @description.en-US Whether to display number value
   * @default           false
   */
  showNumber?: StepProps['showNumber'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
