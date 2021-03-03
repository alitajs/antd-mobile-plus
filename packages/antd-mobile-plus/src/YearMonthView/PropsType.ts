export interface YearMonthViewType {
  /**
   * @description 选中的年月
   * @default new Date()
   */
  date?: Date;
  /**
   * @description 最小年月
   * @default date 前推一年
   */
  minDate?: Date;
  /**
   * @description 最大年月
   * @default date 后推一年
   */
  maxDate?: Date;

  /**
   * @description 点击选中的date
   */
  onChange: (date: Date) => void;
}
