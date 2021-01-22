import { ActivityIndicatorProps } from 'antd-mobile/es/activity-indicator';

export interface ActivityIndicatorPropsType extends ActivityIndicatorProps {
  /**
   * @description       显隐状态
   * @description.en-US Whether to show the indicator (true, the default) or hide it (false).
   * @default           true
   */
  animating?: ActivityIndicatorProps['animating'];
  /**
   * @description       spinner大小，可选`small`/`large`
   * @description.en-US Size of the indicator (`small`/`large`)
   * @default           small
   */
  size?: ActivityIndicatorProps['size'];
  /**
   * @description       loading样式类型
   * @description.en-US Whether to use toast style
   */
  toast?: ActivityIndicatorProps['toast'];
  /**
   * @description       loading文本
   * @description.en-US loading text behind the indicator
   */
  text?: ActivityIndicatorProps['text'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
