/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-22 17:29:44
 */
export interface ProTrackProps {
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
   * @description 自定义组件的样式
   * @default ''
   */
  className?: string;
  /**
   * @description 枚举值字段名称
   * @default value
   */
  valueFieldName?: string;
  /**
   * @description key的字段名称
   * @default id
   */
  keyFieldName?: string;
}
