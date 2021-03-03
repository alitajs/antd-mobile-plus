import { PaginationPropsType as PaginationProps} from 'antd-mobile/es/pagination/PropsType';

export interface PaginationPropsType extends PaginationProps {
  /**
   * @description       形态，可选`button`,`number`,`pointer`
   * @description.en-US the mode of `Pagination` which can be one of `button`,`number`,`pointer`
   * @default           `button`
   */
  mode?: PaginationProps['mode'];
  /**
   * @description       当前页号
   * @description.en-US current page index
   * @default           1
   */
  current: PaginationProps['current'];
  /**
   * @description       数据总数
   * @description.en-US total number of data
   * @default           0
   */
  total: PaginationProps['total'];
  /**
   * @description       是否隐藏数值
   * @description.en-US whether to hide number
   * @default           false
   */
  simple?: PaginationProps['simple'];
  /**
   * @description       禁用状态
   * @description.en-US whether is disabled
   * @default           false
   */
  disabled?: boolean;
  /**
   * @description       国际化, 可以覆盖全局`LocaleProvider`的配置
   * @description.en-US [i18n](/components/locale-provider/) setting, you can override the configuration of the global `LocaleProvider
   */
  locale?: {prevText:string, nextText:string}
  /**
   * @description       change 事件触发的回调函数
   * @description.en-US invoked with the new index when the value changes.
   */
  onChange?: PaginationProps['onChange'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
