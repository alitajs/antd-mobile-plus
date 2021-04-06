/**
 * 类型定义
 */
export interface CalendarPlusSubTitleType {
  /**
   * 日期
   */
  date: Date;
  /**
   * 文字内容
   */
  content: string;
}

export interface CalendarPlusType {
  /**
   * @description 选中当前日期， 默认值为new Date()
   * @default  new Date()
   */
  currentDate?: Date;

  /**
   * @description 选择某个日期
   */
  onSelectValue?: (d: Date) => void;


  /**
   * @description 设置子标题
   */
  subTitles?: CalendarPlusSubTitleType[];

  /**
   * @description 切换月份 和 年份时回调
   */
  onChange?: (d: Date) => void;

  /**
   * @description 头部组件
   * @default HeadPanel
   */
  renderHeader?: () => React.ReactNode;
}
