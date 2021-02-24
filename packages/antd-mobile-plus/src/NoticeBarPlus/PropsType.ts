/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-20 17:50:29
 */
export interface NoticeBarProps {
  /**
   * @description 公告数据，服务端返回数据(数组对象)
   * @default []
   */
  data: any[];
  /**
   * @description 获取公告内容的字段名，根据服务端返回来自定义
   * @default bulletinTitle
   */
  valueKey?: string;
  /**
   * @description 每条item的点击事件
   */
  onItemClick?: (data: any) => void;
  /**
   * @description 右侧展示的文字
   * @default 更多
   */
  extraText?: string;
  /**
   * @description 右侧点击事件
   */
  onExtraClick?: () => void;
  /**
   * @description 公共栏的图标
   * @default null
   */
  noticeIcon?: React.ReactElement<any> | null;
  /**
   * @description 自动切换的时间间隔
   * @default 3000
   */
  autoplayInterval?: number;
  /**
   * @description 是否自动切换
   * @default false
   */
  autoplay?: boolean;
  /**
   * @description 	是否循环播放
   * @default false
   */
  infinite?: boolean;
  /**
   * @description 每个item key值的字段名
   * @default id
   */
  keyFieldName?: string;
}
