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
export interface CommonPros {
  defalutSelect?: number;
  /**
   * @description 字段别名
   * @default {id：'id',label:'label'}
   */
  alias?: AliasProps;
  /**
   * @description 每个数据项的点击事件
   */
  onItemChange: (data: FilterItemProps) => void;
}
export interface FilterItemsProps extends CommonPros{
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


export interface FilterProps extends CommonPros {
  /**
   * @description 筛选项的所有数据
   */
  data: FilterItemProps[];

}

