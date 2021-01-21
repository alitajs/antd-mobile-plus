import { ButtonProps } from 'antd-mobile/es/button';

export interface ButtonPropsType extends ButtonProps {
  /**
   * @description       点击按钮的点击回调函数
   * @description.en-US set the handler to handle `click` event
   */
  onClick?: ButtonProps['onClick'];
  /**
   * @description       按钮类型，可选值为`primary`/`ghost`/`warning`或者不设
   * @description.en-US can be set to `primary`/`ghost`/`warning` or omitted
   */
  type?: ButtonProps['type'];
  /**
   * @description       按钮大小，可选值为`large`、`small`
   * @description.en-US can be set to `large`、`small` or omitted
   * @default           `large`
   */
  size?: ButtonProps['size'];
  /**
   * @description       设置禁用
   * @description.en-US set disabled
   * @default           false
   */
  disabled?: ButtonProps['disabled'];
  /**
   * @description       设置按钮载入状态
   * @description.en-US whether set loading state
   * @default           false
   */
  loading?: ButtonProps['loading'];
  /**
   * @description       class前缀
   * @description.en-US prefix class
   * @default           `am-button`
   */
  prefixCls?: ButtonProps['prefixCls'];
  /**
   * @description       样式类名
   * @description.en-US class name
   */
  className?: ButtonProps['className'];
  /**
   * @description       是否设置为行内按钮
   * @description.en-US whether set as an inline button
   * @default           false
   */
  inline?: ButtonProps['inline'];
  /**
   * @description       可以是 [Icon](https://mobile.ant.design/components/icon) 组件里内置的某个 icon 的 type 值，也可以是任意合法的 ReactElement (注意: `loading`设置后此项设置失效)
   * @description.en-US can be set to one type value of the [Icon Component](https://mobile.ant.design/components/icon) or any valid React.Element. (Note: It will be overwritten by the `loading` setting)
   */
  icon?: ButtonProps['icon'];
  /**
   * @description       点击反馈的自定义类名
   * @description.en-US the feedback's custom class name
   */
  activeClassName?: ButtonProps['activeClassName'];
  /**
   * @description       点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)
   * @description.en-US the feedback's custom style (set to false to disable click feedback)
   * @default           {}
   */
  activeStyle?: ButtonProps['activeStyle'];
  /**
   * @description       自定义样式
   * @description.en-US custom style
   * @default           支持定义默认值
   */
  style?: ButtonProps['style'];

  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
