import { StepsProps } from 'antd-mobile/es/steps';

export interface StepsPropsType extends StepsProps {
  /**
    * @description       指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态
    * @description.en-US To set the current step, counting from 0. You can overwrite this state by using `status` of `Step`
    * @default           0
    */
  current?: StepsProps['current'];
  /**
   * @description       尺寸，支持设置小尺寸`small`
   * @description.en-US To specify the size of the step bar, a smaller size can be achieved by setting it to `small`
   */
  size?: StepsProps['size'];
  /**
  * @description       指定当前步骤的状态，可选 `wait` `process` `finish` `error`
  * @description.en-US To specify the status of the current step, and choose ` wait` `process` `finish` `error `.
  * @default           `process`
  */
  status?: StepsProps['status'];
  /**
   * @description       step 样式( RN 目前只支持 vertical )
   * @description.en-US To specify the direction of the step bar(now only support `vertical` for react-native)
   * @default           `vertical`
   */
  direction?: StepsProps['direction'];
}
