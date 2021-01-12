import { ButtonProps } from 'antd-mobile/es/button';

export interface DemoPropsType extends ButtonProps {
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           支持定义默认值
   */
  onClick?: (e?: React.SyntheticEvent) => void;
}
