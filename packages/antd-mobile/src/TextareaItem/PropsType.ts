import { TextareaItemProps,HTMLTextAreaProps } from 'antd-mobile/es/textarea-item';

export interface TextareaItemPropsType extends TextareaItemProps {
  /**
   * @description       value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)
   * @description.en-US the value to show for the textarea (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controlled component)
   */
  value?: TextareaItemProps['value'];
  /**
   * @description       设置初始默认值
   * @description.en-US provides an initial value that will change when the user starts typing.
   */
  defaultValue?: TextareaItemProps['defaultValue'];
  /**
   * @description       placeholder
   * @description.en-US the string that will be rendered before text input has been entered.
   * @default           ''
   */
  placeholder?: TextareaItemProps['placeholder'];
  /**
   * @description       是否可编辑
   * @description.en-US whether is editable
   * @default           true
   */
  editable?: TextareaItemProps['editable'];
  /**
   * @description       是否禁用
   * @description.en-US whether is disabled
   * @default           false
   */
  disabled?: TextareaItemProps['disabled'];
  /**
   * @description       是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效)
   * @description.en-US whether to display the clear icon (it takes effect only if `editable` is `true` and `disabled` is `false`)
   * @default           false
   */
  clear?: TextareaItemProps['clear'];
  /**
   * @description       显示几行
   * @description.en-US sets the number of lines for a textarea
   * @default           1
   */
  rows?: TextareaItemProps['rows'];
  /**
   * @description       计数功能,兼具最大长度,默认为0,代表不开启计数功能
   * @description.en-US it is used for word count and maxlength, the default is 0 which indicates that word count is turned off.
   */
  count?: TextareaItemProps['count'];
  /**
   * @description       change 事件触发的回调函数
   * @description.en-US callback that is called when the textarea's text changes.
   */
  onChange?: TextareaItemProps['onChange'];
  /**
   * @description       blur 事件触发的回调函数
   * @description.en-US callback that is called when the textarea is blurred.
   */
  onBlur?: TextareaItemProps['onBlur'];
  /**
   * @description       focus 事件触发的回调函数
   * @description.en-US callback that is called when the textarea is focused.
   */
  onFocus?: TextareaItemProps['onFocus'];
  /**
   * @description       报错样式
   * @description.en-US whether to display error
   * @default           false
   */
  error?: TextareaItemProps['error'];
  /**
   * @description       点击报错 icon 触发的回调
   * @description.en-US callback that is called when the error icon is clicked
   */
  onErrorClick?: TextareaItemProps['onErrorClick'];
  /**
   * @description       高度自适应, autoHeight 和 rows 请二选一
   * @description.en-US auto adjust height (only use one of `autoHeight` and `rows` properties)
   * @default           false
   */
  autoHeight?: TextareaItemProps['autoHeight'];
  /**
   * @description       定宽枚举值：`num * @input-label-width: 34px`，可用`2-7`之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符)
   * @description.en-US number of label text, valid value is 2 to 7
   * @default           `5`
   */
  labelNumber?: TextareaItemProps['labelNumber'];
  /**
   * @description       textarea 的 name
   * @description.en-US the name of textarea
   */
  name?: TextareaItemProps['name'];
  /**
   * @description       列表 className 前缀
   * @description.en-US the class name prefix of list
   * @default           `false`
   */
  prefixListCls?: TextareaItemProps['prefixListCls'];
  /**
   * @description       文案说明
   * @description.en-US the description of textarea
   * @default           `am-list`
   */
  title?: TextareaItemProps['title'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   * @default           ''
   */
  ext?: any;

  /**
   * @description 转发
   */
  ref?: (instance: any) => void;
}
