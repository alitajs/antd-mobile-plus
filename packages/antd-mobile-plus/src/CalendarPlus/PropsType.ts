/*
 * @Description: 
 * @Author: qclong
 * @Date: 2021-02-19 11:13:42
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
   * 选中当前日期， 默认值为new Date()
   */
  currentDate?: Date;

  /**
   * 选择某个日期
   */
  onSelectValue?: (d: Date) => void;

  /**
   *  展示月份日历，默认值为new Date()
   */
  date?: Date;

  /**
   * 设置子标题
   */
  subTitles?: CalendarPlusSubTitleType[];

  /**
   * 切换月份 和 年份时回调
   */
  onChange?: (d: Date) => void;

  /**
   * 头部组件
   */
  renderHeader?: () => React.ReactNode;
}