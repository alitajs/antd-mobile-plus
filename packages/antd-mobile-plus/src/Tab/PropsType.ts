export interface TabItemType {
  /**
   * @description 标题
   */
  title: string;

  /**
  * @description 图标
  */
  icon?: React.ReactNode;
}

export interface TabData {
  /**
   * @description 唯一索引
   */
  key?: string;

  /**
   * @description 标题
   */
  title: React.ReactNode;
}

export interface TabType {
  /**
   * @description 当tab发生变化时回调
   */
  onChange?: (tab: TabItemType, index?: number) => void;

  /**
   * @description 数据源
   */
  tabs: TabItemType[];

  /**
   * @description children
   */
  children: React.ReactChildren;
}
