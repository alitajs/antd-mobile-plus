import { GridProps } from 'antd-mobile/es/grid';

export interface GridPropsType extends GridProps {
  /**
   * @description       传入的菜单数据
   * @description.en-US data record array to be rendered
   * @default           []
   */
  data?: GridProps['data'];
  /**
   * @description       点击每个菜单的回调函数
   * @description.en-US Handler to be called when the user taps the grid
   */
  onClick?: GridProps['onClick'];
  /**
   * @description       列数
   * @description.en-US the number of columns
   * @default           `4`
   */
  columnNum?: GridProps['columnNum'];
  /**
   * @description       是否有边框
   * @description.en-US whether to show border
   * @default           `true`
   */
  hasLine?: GridProps['hasLine'];
  /**
   * @description       是否跑马灯
   * @description.en-US whether to be played as a Carousel
   * @default           `false`
   */
  isCarousel?: GridProps['isCarousel'];
  /**
   * @description       如果是跑马灯, 一页跑马灯需要展示的行数
   * @description.en-US the max number of rows to be showed each page of the Carousel
   * @default           `2`
   */
  carouselMaxRow?: GridProps['carouselMaxRow'];
  /**
   * @description       自定义每个 grid 条目的创建函数
   * @description.en-US custom function to create each grid item
   */
  renderItem?: GridProps['renderItem'];
  /**
   * @description       每个格子是否固定为正方形
   * @description.en-US whether each item restrict to a square
   * @default           true
   */
  square?: GridProps['square'];
  /**
   * @description       点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)
   * @description.en-US the feedback's custom style (set to false to disable click feedback)
   * @default           {}
   */
  activeStyle?: GridProps['activeStyle'];
  /**
   * @description       点击反馈的自定义类名
   * @description.en-US the feedback's custom class name
   */
  activeClassName?: GridProps['activeClassName'];
  /**
   * @description       每个格子自定义样式
   * @description.en-US Custom GridCell Style
   * @default           {}
   */
  itemStyle?: GridProps['itemStyle'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
