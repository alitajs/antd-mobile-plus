import { BadgeProps } from 'antd-mobile/es/badge';

export interface BadgePropsType extends BadgeProps {
  /**
   * @description       大小，可选 `large` `small`
   * @description.en-US size of badge, optional: `large` `small`
   * @default           `small`
   */
  size?: BadgeProps['size'];
  /**
   * @description       展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏
   * @description.en-US text or number inside badge
   */
  text?: BadgeProps['text'];
  /**
   * @description       置于角落
   * @description.en-US whether is badge at corner position
   * @default           `false`
   */
  corner?: BadgeProps['corner'];
  /**
   * @description       不展示数字，只有一个小红点
   * @description.en-US show badge as a red dot
   * @default           `false`
   */
  dot?: BadgeProps['dot'];
  /**
   * @description       展示封顶的数字值
   * @description.en-US max count to show
   * @default           `99`
   */
  overflowCount?: BadgeProps['overflowCount'];
  /**
   * @description       营销样式
   * @description.en-US hot commercial style
   * @default           `false`
   */
  hot?: BadgeProps['hot'];
}
