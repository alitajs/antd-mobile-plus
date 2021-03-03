import { NavBarProps } from 'antd-mobile/es/nav-bar/PropsType';

export interface NavBarPropsType extends NavBarProps {
  /**
   * @description       模式
   * @description.en-US style mode
   * @default           'dark' enum{'dark', 'light'}
   */
  mode?: NavBarProps['mode'];
  /**
   * @description       出现在最左边的图标占位符
   * @description.en-US appears on the leftmost icon placeholder
   */
  icon?: NavBarProps['icon'];
  /**
   * @description       导航左边内容
   * @description.en-US left content
   */
  leftContent?: NavBarProps['leftContent'];
  /**
   * @description       导航右边内容
   * @description.en-US right content
   */
  rightContent?: NavBarProps['rightContent'];
  /**
   * @description       导航左边点击回调
   * @description.en-US click the callback on the left
   */
  onLeftClick?: NavBarProps['onLeftClick'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;

  /**
   * @description 转发
   */
  ref?: any;
}
