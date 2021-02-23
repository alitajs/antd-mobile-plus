/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-22 17:29:44
 */
export interface FilterItemProps {
  /**
   * @description 筛选的数据
   * @default []
   */
  data: any[];
  /**
   * @description 默认选择项
   * @default 0
   */
  defalutSelect?: number;
  /**
   * @description 枚举值字段名称
   * @default value
   */
  valueFieldName?: string;
  /**
   * @description 面板当中每个item的key的字段名称
   * @default id
   */
  keyFieldName?: string;
  /**
   * @description 每个数据项的点击事件
   */
  onItemClick?: (data: any) => void;
  /**
   * @description 每个Filter的id
   */
  filterId: string;
}

export interface FilterItemsProps {
  /**
 * @description 每个筛选项数据
 */
  item: FilterItemProps;
  /**
 * @description 当前点击的Filter的状态
 * @default 'up'
 */
  openFlag?: string;
  /**
   * @description 点击当前filter进行up和down切换，关闭其他的filter
   */
  onClick: (status: string) => void;
}

export interface ProTrackProps {
  /**
   * @description 筛选项的所有数据
   */
  data: FilterItemProps[];

}

