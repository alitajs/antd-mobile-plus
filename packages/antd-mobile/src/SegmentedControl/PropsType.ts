import { SegmentedControlProps } from 'antd-mobile/es/segmented-control';

export interface SegmentedControlPropsType extends SegmentedControlProps {
  /**
   * @description       样式前缀
   * @description.en-US prefix class
   * @default           `am-segment`
   */
  prefixCls?: SegmentedControlProps['prefixCls'];
  /**
   * @description       样式类
   * @description.en-US class name of component
   */
  className?: SegmentedControlProps['className'];
  /**
   * @description       样式类
   * @description.en-US style of component
   * @default           `{}`
   */
  style?: SegmentedControlProps['style'];
  /**
   * @description       组件主色调
   * @description.en-US accent color of the control
   * @default           `#2DB7F5`
   */
  tintColor?: SegmentedControlProps['tintColor'];
  /**
   * @description       是否启用
   * @description.en-US whether the user is able to interact with the control
   * @default           false
   */
  disabled?: SegmentedControlProps['disabled'];
  /**
   * @description       选中项在数组中的索引
   * @description.en-US the index in `props.values` of the segment to be (pre)selected
   * @default           0
   */
  selectedIndex?: SegmentedControlProps['selectedIndex'];
  /**
   * @description       选项数组,值是字符串
   * @description.en-US The labels for the control's segment buttons, in order
   * @default           []
   */
  values?: SegmentedControlProps['values'];
  /**
   * @description       回调函数, 其中`e.nativeEvent.selectedSegmentIndex`是选中项索引, `e.nativeEvent.value`是选中的值. 
   * @description.en-US callback that is called when the user taps a segment; passes the event object as an argument. `e.nativeEvent.selectedSegmentIndex` is selected index. `e.nativeEvent.value` is selected value.
   * @default           function(){}
   */
  onChange?: SegmentedControlProps['onChange'];
  /**
   * @description       回调函数
   * @description.en-US callback that is called when the user taps a segment; passes the segment's value as an argument
   * @default           function(){}
   */
  onValueChange?: SegmentedControlProps['onValueChange'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
