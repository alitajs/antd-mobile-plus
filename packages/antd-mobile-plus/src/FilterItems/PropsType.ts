export interface FilterItemProps {
  /**
   * @description 筛选的数据
   * @default []
   */
  data: any[];
  /**
   * @description 每个Filter的id
   */
  filterId: string;

  /**
   * @description 初始的文字,一般在该值不在数据当中使用
   * @default 数组中的第一个
   */
   defaultText?: string;
}
export interface AliasProps {
  /**
   * @description 枚举值字段名称
   * @default value
   */
  label?: string;
  /**
   * @description 面板当中每个item的key的字段名称
   * @default id
   */
  id?: string;
}
export interface FilterItemsProps {
  openFlag?: string;
  /**
   * @description 点击当前filter进行up和down切换，关闭其他的filter
   */
  onClick: (status: string, selectObj: Object) => void;
  /**
   * @description 当前选中的对象
   */
  selectObj: Object;
  /**
   * @description 当前点击的筛选filterId
   */
  activeFilterId: string;
  /**
   * @description 每个筛选项的filterId
   */
  filterId: string;
  /**
   * @description 每个筛选项选中的初始值
   */
  initObj: Object;
  /**
   * @description 字段别名
   * @default {id：'id',label:'label'}
   */
  aliasObj: AliasProps;
  /**
   * @description 初始的文字,一般在该值不在数据当中使用
   * @default 数组中的第一个
   */
  defaultText?: string;

  /**
   * 值
   */
  value?: string;

  /**
   * @description 筛选的数据
   * @default []
   */
  data: any[];
}

export interface FilterProps {
  /**
   * @description 筛选项的所有数据
   */
  data: FilterItemProps[];
  /**
   * @description 默认选择下标
   * @default 0
   */
  defaultSelect?: number;
  /**
   * @description 字段别名
   * @default {id：'id',label:'label'}
   */
  alias?: AliasProps;
  /**
   * @description 每个数据项的点击事件
   */
  onItemChange: (data: any) => void;
  /**
   * @description 页面区域滚动节点，一般用于`type`为relative时使用
   * @default document.documentElement
   */
  scrollElement?: HTMLElement;

  /**
   * 每一项的值
   */
  value?: Record<string, string>;
}
