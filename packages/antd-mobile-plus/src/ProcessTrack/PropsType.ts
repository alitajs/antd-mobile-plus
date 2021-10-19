/**
 * @description 每个流程块展示的字段内容
 */
interface LinkMapProps {
  /**
   * @description 为服务端返回的字段名称
   */
  key: string;
  /**
   * @description 页面展示的字段名称
   */
  label: string;
  /**
   * @description 是否是电话字段，需要拨号
   * @default false
   */
  isPhone?: boolean;
}
export interface ProTrackProps {
  /**
   * @description 流程数据(数组对象)
   */
  data: any;
  /**
   * @description  对应要展示的字段数组  [{key:'', label:'', isPhone:false }]
   * key--为服务端返回的字段名称，label--页面展示的字段名称 isPhone--是否是电话字段，需要拨号
   */
  linkMap: LinkMapProps[];
  /**
   * @description 流程轨迹头部的时间值的字段名
   * @default --- createTime
   */
  cTimeKey?: string;
  /**
   * @description 每个流程节点标题的字段名
   * @default---traceName
   */
  tNameKey?: string;
  /**
   * @description 根据业务需求，设定默认展示或者默认收起
   * @default true
   */
  down?: boolean;
  /**
   * @description 流程轨迹木有数据时的默认数据
   * @default--暂无流程数据
   */
  empty?: React.ReactNode;
  /**
   *@description 拨打电话,这里一般调用的都是原生的
   */
  call?: (item: any) => void;

  /**
   * @description 流程轨迹每个item的key 的字段名称
   * @default id
   */
  keyFieldName?: string;

  /**
   * @description 自定义每个item的底部
   */
  renderItemFooter: (item: any) => React.ReactNode;
}
