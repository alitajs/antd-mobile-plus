import { CalendarProps } from 'antd-mobile/es/calendar';

export interface CalendarPropsType extends CalendarProps {
  /**
   * @description       入场方向 vertical: 垂直 horizontal: 水平
   * @description.en-US enter direction
   * @default           vertical
   */
  enterDirection?: CalendarProps['enterDirection'];
  /**
   * @description       本地化
   * @description.en-US Models.Locale
   */
  locale?: CalendarProps['locale'];
  /**
   * @description       关闭时回调
   * @description.en-US on cancel
   */
  onCancel?: CalendarProps['onCancel'];
  /**
   * @description       确认时回调
   * @description.en-US on confirm
   */
  onConfirm?: CalendarProps['onConfirm'];
  /**
   * @description       是否选择时间
   * @description.en-US pick time
   * @default           false
   */
  pickTime?: CalendarProps['pickTime'];
  /**
   * @description       样式前缀
   * @description.en-US prefix class
   * @default           rmc-calendar
   */
  prefixCls?: CalendarProps['prefixCls'];
  /**
   * @description       替换快捷选择栏 需要设置showShortcut: true
   * @description.en-US replace shortcut. need showShortcut: true
   */
  renderShortcut?: CalendarProps['renderShortcut'];
  /**
   * @description       替换标题栏
   * @description.en-US replace header
   */
  renderHeader?: CalendarProps['renderHeader'];
  /**
   * @description       快捷日期选择
   * @description.en-US show shortcut
   * @default           false
   */
  showShortcut?: CalendarProps['showShortcut'];
  /**
   * @description       标题
   * @description.en-US header title
   * @default           {locale.title}
   */
  title?: CalendarProps['title'];
    /**
   * @description       选择类型 one: 单日 range: 日期区间
   * @description.en-US select type. one: one-day range: date range
   * @default           range
   */
  type?: CalendarProps['type'];
  /**
   * @description       是否显示
   * @description.en-US visiable
   * @default           false
   */
  visible?: CalendarProps['visible'];
  /**
   * @description       显示开始日期
   * @description.en-US the default date for show
   * @default           today
   */
  defaultDate?: CalendarProps['defaultDate'];
  /**
   * @description       日期扩展数据
   * @description.en-US extra info
   */
  getDateExtra?: CalendarProps['getDateExtra'];
  /**
   * @description       无限滚动优化（大范围选择）
   * @description.en-US infinite scroll optimize
   * @default           false
   */
  infiniteOpt?: CalendarProps['infiniteOpt'];
    /**
   * @description       初始化月个数
   * @description.en-US inital months
   * @default           6
   */
  initalMonths?: CalendarProps['initalMonths'];
  /**
   * @description       最大日期
   * @description.en-US max date
   */
  maxDate?: CalendarProps['maxDate'];
  /**
   * @description       最小日期
   * @description.en-US min date
   */
  minDate?: CalendarProps['minDate'];
  /**
   * @description       选择区间回调
   * @description.en-US on select dates callback
   */
  onSelect?: CalendarProps['onSelect'];
  /**
   * @description       选择区间包含不可用日期
   * @description.en-US on select has disable date
   */
  onSelectHasDisableDate?: CalendarProps['onSelectHasDisableDate'];
  /**
   * @description       行大小
   * @description.en-US row size
   */
  rowSize?: CalendarProps['rowSize'];
  /**
   * @description       默认日历选择范围
   * @description.en-US default date select value
   */
  defaultValue?: CalendarProps['defaultValue'];
  /**
   * @description       默认时间选择值
   * @description.en-US default time of timePicker
   */
  defaultTimeValue?: CalendarProps['defaultTimeValue'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
