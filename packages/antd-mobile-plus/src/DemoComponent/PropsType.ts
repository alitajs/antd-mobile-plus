import { ButtonProps } from 'antd-mobile-v2/es/button';

export interface DemoPropsType extends ButtonProps {
  // 文档 https://github.com/styleguidist/react-docgen-typescript#example
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.en-US 还支持不同的 locale 后缀来实现多语言描述
   * @default           支持定义默认值
   */
  onClick?: (e?: React.SyntheticEvent) => void;
  /**
   * @description 按钮标题
   * @description.en-US button title
   * @default 你好,世界!
   */
  title?: string;
}
