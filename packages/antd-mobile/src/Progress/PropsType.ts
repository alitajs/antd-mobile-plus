import { ProgressProps } from 'antd-mobile/es/progress';

export interface ProgressPropsType extends ProgressProps {
  /**
   * @description       进度百分比
   * @description.en-US percent value of progress
   * @default           0
   */
  percent?: ProgressProps['percent'];
  /**
   * @description       进度条的位置，fixed 将浮出固定在最顶层，可选: `fixed` `normal`
   * @description.en-US position of progress bar, optional：`fixed` `normal`
   * @default           `fixed`
   */
  position?: ProgressProps['position'];
  /**
   * @description       是否显示未填充的轨道
   * @description.en-US whether to fill unfinished part of progress
   * @default           true
   */
  unfilled?: ProgressProps['unfilled'];
  /**
   * @description       进度条样式
   * @description.en-US the style of container
   * @default           {}
   */
  style?: ProgressProps['style'];
  /**
   * @description       进度样式
   * @description.en-US the style of bar
   * @default           {}
   */
  barStyle?: ProgressProps['barStyle'];
}
