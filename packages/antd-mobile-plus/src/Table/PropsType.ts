export interface TableColumnType {
  /**
  * @description 标题
  */
  title?: React.ReactNode | string | Array<string>;

  /**
  * @description 数据指向
  */
  dataIndex: string;

  /**
  * @description 列宽，百分比值
  */
  width?: number;

  /**
  * @description key
  */
  key?: string;

  /**
  * @description 对齐
  */
  align?: string;

  /**
  * @description 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引
  */
  render?: (text?: string, record?: TableColumnType, index?: number) => void;
}

export interface TableType {
  /**
   * @description 数据源
   */
  dataSource: Array<any>;

  /**
   * @description 表格列配置
   */
  columns?: Array<TableColumnType>;

  /**
   * @description 是否是二维表格
   */
  twoDimension?: boolean;

  /**
   * @description 首列是否固定
   */
   fixedLeft?: boolean;

   /**
    * @description 首列文字及背景样式
    */
   firstLeftStyle?: any;
}
