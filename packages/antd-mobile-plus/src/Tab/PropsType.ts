/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-19 15:21:12
 */
export interface TabItemType {
  title: string;
  icon?: React.ReactNode;
}

export interface TabData {
  key?: string;
  title: React.ReactNode;
  /** for user's custom extends */
  [key: string]: any;
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

  children: React.ReactChildren;
}
