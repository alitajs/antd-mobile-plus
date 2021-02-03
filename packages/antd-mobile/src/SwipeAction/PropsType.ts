import { SwipeActionProps } from 'antd-mobile/es/swipe-action';

export interface SwipeActionPropsType extends SwipeActionProps {
  /**
   * @description       `swipeout` 样式
   * @description.en-US style for `swipeout`
   */
  style?: SwipeActionProps['style'];
  /**
   * @description       左侧按钮组
   * @description.en-US left buttons for `swipeout`
   * @default           `null`
   */
  left?: SwipeActionProps['left'];
  /**
   * @description       右侧按钮组
   * @description.en-US right buttons for `swipeout`
   * @default           `null`
   */
  right?: SwipeActionProps['right'];
  /**
   * @description       点击按钮后自动隐藏按钮
   * @description.en-US auto hide after button is pressed
   * @default           `function() {}`
   */
  autoClose?: SwipeActionProps['autoClose'];
  /**
   * @description       打开时回调函数
   * @description.en-US callback function that is triggered when the buttons will be opened
   * @default           `function() {}`
   */
  onOpen?: SwipeActionProps['onOpen'];
  /**
   * @description       禁用 `swipeout`
   * @description.en-US whether is disabled
   * @default           `false`
   */
  disabled?: SwipeActionProps['disabled'];
  /**
   * @description       关闭时回调函数
   * @description.en-US callback function that is triggered when the buttons will be closed
   * @default           `function() {}`
   */
  onClose?: SwipeActionProps['onClose'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
