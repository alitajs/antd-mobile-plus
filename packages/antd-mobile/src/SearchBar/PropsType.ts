import { SearchBarProps } from 'antd-mobile/es/search-bar';

export interface SearchBarPropsType extends SearchBarProps {
  /**
   * @description       搜索框的默认值
   * @description.en-US the uncontrolled default value
   */
  defaultValue?: SearchBarProps['defaultValue'];
  /**
   * @description       搜索框的当前值
   * @description.en-US the controlled current value
   */
  value?: SearchBarProps['value'];
  /**
   * @description       placeholder
   * @description.en-US placeholder
   */
  placeholder?: SearchBarProps['placeholder'];
  /**
   * @description       submit 事件 (点击键盘的 enter)
   * @description.en-US submit event (click the enter on the keyboard)
   */
  onSubmit?: SearchBarProps['onSubmit'];
  /**
   * @description       change 事件的回调 
   * @description.en-US change event callback
   */
  onChange?: SearchBarProps['onChange'];
  /**
   * @description       focus 事件的回调
   * @description.en-US focus event callback
   */
  onFocus?: SearchBarProps['onFocus'];
  /**
   * @description       blur 事件的回调
   * @description.en-US blur event callback
   */
  onBlur?: SearchBarProps['onBlur'];
  /**
   * @description       点击`取消`按钮触发 (不再自动清除输入框的文字)
   * @description.en-US Click the `Cancel` button to trigger (The text of the input box is no longer automatically cleared)
   */
  onCancel?: SearchBarProps['onCancel'];
  /**
   * @description       是否一直显示`取消`按钮
   * @description.en-US Whether the `Cancel` button is always displayed
   * @default           `false`
   */
  showCancelButton?: SearchBarProps['showCancelButton'];
  /**
   * @description       定制`取消`按钮的文字
   * @description.en-US Customize the text of the `Cancel` button
   * @default           `取消`
   */
  cancelText?: SearchBarProps['cancelText'];
  /**
  * @description       设置禁用
  * @description.en-US Set disabled
  * @default           `false`
  */
  disabled?: SearchBarProps['disabled'];
  /**
   * @description       点击 clear 图标触发
   * @description.en-US Click the clear icon to trigger
   */
  onClear?: SearchBarProps['onClear'];
  /**
   * @description       最多允许输入的字符个数
   * @description.en-US The maxlength attribute limits the number of characters that SearchBar can accept
   */
  maxLength?: SearchBarProps['maxLength'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
