import { InputItemProps } from 'antd-mobile/es/input-item';


export interface InputItemPropsType extends InputItemProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     * @default 
     */
    ext?: any;
    /**
     * @description       可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); `digit`(表示原生的 number 类型); `money`(带小数点的模拟的数字键盘) 以及其他标准 html input type 类型
     * @description.en-US can be `bankCard`; `phone`(which the maxLength is 11 and setting will be ignored); `password`; `number`(in order to evoke the 'numeric keyboard with decimal', this type is not a native number, but `<input type="text" pattern="[0-9]*"/>`); `digit`(represent the native type number); `money`(analog numeric keyboard with decimal); As well as other standard html input type values.
     * @default text
     */
    type?: InputItemProps["type"];
    /**
     * @description      value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)
     * @description.en-US the value of input (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controled component)
     * @default 
     */
    value?: InputItemProps["value"];
    /**
     * @description       设置初始默认值   
     * @description.en-US provides an initial value that will change when the user starts typing.
     * @default ''
     */
    defaultValue?: InputItemProps["defaultValue"];
    /**
     * @description       placeholder
     * @description.en-US the string that will be rendered before text input has been entered.
     * @default 
     */
    placeholder?: InputItemProps["placeholder"];
    /**
    * @description      是否可编辑        
    * @description.en-US whether is editable
    * @default true
    */
    editable?: InputItemProps["editable"];
    /**
     * @description       是否禁用
     * @description.en-US whether is disabled    
     * @default false
     */
    disabled?: InputItemProps["disabled"];
    /**
    * @description       是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效)
    * @description.en-US whether to display clear(it takes effect only `editable` is `true` and `disabled` is `false` has been set)
    * @default false
    */
    clear?: InputItemProps["clear"];
    /**
     * @description       最大长度
     * @description.en-US limits the maximum number of characters that can be entered
     * @default  无。除money类型外，仅当text, email, search, password, tel, or url 有效。具体可以查看文档 https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/input，以及相关issue https://github.com/ant-design/ant-design-mobile/issues/2966
     * @default.en-US  valid for "text, email, search, password, tel, or url" . https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/input, https://github.com/ant-design/ant-design-mobile/issues/2966
     */
    maxLength?: InputItemProps["maxLength"];
    /**
    * @description       change 事件触发的回调函数
    * @description.en-US callback that is called when the text input's text changes
    * @default 
    */
    onChange?: InputItemProps["onChange"];
    /**
     * @description       blur 事件触发的回调函数
     * @description.en-US callback that is called when the text input is blurred
     * @default 
     */
    onBlur?: InputItemProps["onBlur"];
    /**
    * @description      focus 事件触发的回调函数
    * @description.en-US callback that is called when the text input is focused
    * @default 
    */
    onFocus?: InputItemProps["onFocus"];
    /**
     * @description      报错样式  
     * @description.en-US whether to display error 
     * @default false
     */
    error?: InputItemProps["error"];
    /**
    * @description       点击报错 icon 触发的回调函数
    * @description.en-US callback that is called when the error icon is clicked
    * @default 
    */
    onErrorClick?: InputItemProps["onErrorClick"];
    /**
     * @description       右边注释
     * @description.en-US the right content of `InputItem`
     * @default 
     */
    extra?: InputItemProps["extra"];
    /**
    * @description      extra 点击事件触发的回调函数
    * @description.en-US callback that is called when the extra content is clicked
    * @default 
    */
    onExtraClick?: InputItemProps["onExtraClick"];
    /**
     * @description       虚拟键盘点击确认时的回调函数
     * @description.en-US callback that is called when "confirm" button of virtual keyboard is clicked
     * @default 
     */
    onVirtualKeyboardConfirm?: InputItemProps["onVirtualKeyboardConfirm"];
    /**
     * @description       标签的文字个数，可用`2-7`之间的数字
     * @description.en-US number of label text, valid value is 2 to 7
     * @default 
     */
    labelNumber?: InputItemProps["labelNumber"];
    /**
     * @description       当清除内容时，是否将清除前的内容替换到 placeholder 中
     * @description.en-US whether to replace the placeholder with cleared content
     * @default 
     */
    updatePlaceholder?: InputItemProps["updatePlaceholder"];
    /**
     * @description       列表 className 前缀
     * @description.en-US the class name prefix of list
     * @default 
     */
    prefixListCls?: InputItemProps["prefixListCls"];
    /**
     * @description       input 的 name  
     * @description.en-US the name of input 
     * @default 
     */
    name?: InputItemProps["name"];
    /**
     * @description       文字排版起始方向, 只有 `type='money'` 支持， 可选为 `'left'`, `'right'`
     * @description.en-US text align direction, only `type='money'` support this api， could be `'left'`, `'right'`
     * @default 
     */
    moneyKeyboardAlign?: InputItemProps["moneyKeyboardAlign"];
    /**
     * @description        自定义金额虚拟键盘属性 
     * @description.en-US custom money virtual keyboard props
     * @default 
     */
    moneyKeyboardWrapProps?: InputItemProps["moneyKeyboardWrapProps"];
    /**
     * @description       自定义金额虚拟键盘头部
     * @description.en-US  custom money virtual keyboard header
     * @default 
     */
    moneyKeyboardHeader?: InputItemProps["moneyKeyboardHeader"];
    /**
     * @description       国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置, 当`type`为`money`，可以自定义确认按钮的文案。
     * @description.en-US internationalization, can override `[LocaleProvider](https://mobile.ant.design/components/locale-provider)`,  when`type`is`money`，can cunstom the keyboard confirm item's label
     * @default 
     */
    locale?: InputItemProps["locale"];
    /**
     * @description       防止输入框被键盘遮挡。(仅 `type=money`时有效)
     * @description.en-US prevent keyboard from covering input element.(only for `type=money`)
     * @default false
     */
    autoAdjustHeight?: InputItemProps["autoAdjustHeight"];
    /**
     * @description       禁用部分数字按键(仅 `type=money`时有效)
     * @description.en-US disable some keyboard item (only for  `type=money`)
     * @default 
     */
    disabledKeys?: InputItemProps["disabledKeys"];
}
