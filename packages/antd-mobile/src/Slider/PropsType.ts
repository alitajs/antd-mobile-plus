import { SliderProps } from 'antd-mobile/es/slider';

export interface SliderPropsType extends SliderProps {
  /**
   * @description       最小值
   * @description.en-US The minimum value the slider can slide to.
   * @default           0
   */
  min?: SliderProps['min'];
  /**
   * @description       最大值
   * @description.en-US The maximum value the slider can slide to.
   * @default           100
   */
  max?: SliderProps['max'];
  /**
   * @description       步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。
   * @description.en-US The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`.
   * @default           1
   */
  step?: SliderProps['step'];
  /**
   * @description       设置当前取值。
   * @description.en-US The value of Range.
   */
  value?: SliderProps['value'];
  /**
   * @description       设置初始取值。
   * @description.en-US The default value of Range.
   * @default           0
   */
  defaultValue?: SliderProps['defaultValue'];
  /**
   * @description       值为 `true` 时，滑块为禁用状态
   * @description.en-US If true, the slider will not be interactable.
   * @default           false
   */
  disabled?: SliderProps['disabled'];
  /**
   * @description       当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。
   * @description.en-US Callback function that is called when the user changes the Range's value.
   * @default           Noop
   */
  onChange?: SliderProps['onChange'];
  /**
   * @description       与 `ontouchend` 触发时机一致，把当前值作为参数传入。
   * @description.en-US Fired when `ontouchend` is fired.
   * @default           Noop
   */
  onAfterChange?: SliderProps['onAfterChange'];
  /**
   * @description       刻度标记，key 的类型必须为 `Number` 且取值在闭区间 [min, max] 内
   * @description.en-US Tick mark of Range, type of key must be number, and must in closed interval [min, max].
   * @default           {}
   */
  marks?: SliderProps['marks'];
  /**
   * @description       是否只能拖拽到刻度上
   * @description.en-US Whether the thumb can be dragged over tick only.
   * @default           false
   */
  dots?: SliderProps['dots'];
  /**
   * @description       `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列
   * @description.en-US Make effect when `marks` not null，`true` means containment and `false` means coordinative
   * @default           true
   */
  included?: SliderProps['included'];
  /**
   * @description       未选中 track 的样式(`将被废弃，请使用 railStyle 代替`)
   * @description.en-US The style used for the track to the left of the button.(`will be deprecate, please use trackStyle instead`)
   */
  maximumTrackStyle?: SliderProps['maximumTrackStyle'];
  /**
   * @description       选中部分的 track 样式 (`将被废弃，请使用 trackStyle 代替`)
   * @description.en-US The style used for the track to the right of the button.（`will be deprecate, please use railStyle instead`）
   */
  minimumTrackStyle?: SliderProps['minimumTrackStyle'];
  /**
   * @description       滑块的样式
   * @description.en-US The style used for handle.
   */
  handleStyle?: SliderProps['handleStyle'];
  /**
   * @description       选中部分滑动条的样式
   * @description.en-US The style used for the track to the left of the button.
   */
  trackStyle?: SliderProps['trackStyle'];
  /**
   * @description       未选中部分
   * @description.en-US The style used for the track to the right of the button.
   */
  railStyle?: SliderProps['railStyle'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
