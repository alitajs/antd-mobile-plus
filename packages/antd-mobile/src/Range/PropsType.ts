import { RangeProps } from 'antd-mobile/es/range';

export interface RangePropsType extends RangeProps {
  /**
   * @description       最小值
   * @description.en-US The minimum value the slider can slide to.
   * @default           0
   */
  min?: RangeProps['min'];
  /**
   * @description       最大值
   * @description.en-US The maximum value the slider can slide to.
   * @default           100
   */
  max?: RangeProps['max'];
  /**
   * @description       步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。
   * @description.en-US The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`.
   * @default           1
   */
  step?: RangeProps['step'];
  /**
   * @description       设置当前取值。
   * @description.en-US The value of Range.
   */
  value?: RangeProps['value'];
  /**
   * @description       设置初始取值。
   * @description.en-US The default value of Range.
   * @default           [0,0]
   */
  defaultValue?: RangeProps['defaultValue'];
  /**
   * @description       值为 `true` 时，滑块为禁用状态
   * @description.en-US If true, the slider will not be interactable.
   * @default           false
   */
  disabled?: RangeProps['disabled'];
  /**
   * @description       当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。
   * @description.en-US Callback function that is called when the user changes the Range's value.
   * @default           Noop
   */
  onChange?: RangeProps['onChange'];
  /**
   * @description       与 `ontouchend` 触发时机一致，把当前值作为参数传入。
   * @description.en-US Fired when `ontouchend` is fired.
   * @default           Noop
   */
  onAfterChange?: RangeProps['onAfterChange'];
  /**
   * @description       刻度标记，key 的类型必须为 `Number` 且取值在闭区间 [min, max] 内
   * @description.en-US Tick mark of Range, type of key must be number, and must in closed interval [min, max].
   * @default           {}
   */
  marks?: {Number:string};
  /**
   * @description       是否只能拖拽到刻度上
   * @description.en-US Whether the thumb can be dragged over tick only.
   * @default           false
   */
  dots?: Boolean;
  /**
   * @description       `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列
   * @description.en-US Make effect when `marks` not null，`true` means containment and `false` means coordinative
   * @default           true
   */
  included?: Boolean;
  /**
   * @description       确定要渲染的范围数，并将渲染多个控柄 (数字+1)
   * @description.en-US Determine how many ranges to render, and multiple handles will be rendered (number + 1).
   * @default           `1`
   */
  count?: number;
  /**
   * @description       可以将`allowCross`设置为`true`，以允许这些句柄交叉
   * @description.en-US `allowCross` could be set as `true` to allow those handles to cross.
   * @default           `true`
   */
  allowCross?: boolean;
  /**
   * @description       可以将`pushable`设置为`true`，以在移动手柄时推动周围的手柄。设置为数字时，数字将是手柄之间的最小保证距离 示例: ![](http://i.giphy.com/l46Cs36c9HrHMExoc.gif)
   * @description.en-US `pushable` could be set as `true` to allow pushing of surrounding handles when moving an handle. When set to a number, the number will be the minimum ensured distance between handles. Example: ![](http://i.giphy.com/l46Cs36c9HrHMExoc.gif)
   * @default           `true`
   */
  pushable?: boolean | number;
  /**
   * @description       滑块的样式，按数组顺序应用到多滑块
   * @description.en-US style of handle，will be applied to mutli handle follow the array elemetns order
   */
  handleStyle?: RangeProps['handleStyle'];
  /**
   * @description       选中部分滑动条的样式，按数组顺序应用到滑动条的多区间
   * @description.en-US style of track，will be applied to mutli track follow the array elemetns order
   */
  trackStyle?: RangeProps['trackStyle'];
  /**
   * @description       未选中部分
   * @description.en-US style of slider base style, which means the area that not been selected
   */
  railStyle?: RangeProps['railStyle'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
