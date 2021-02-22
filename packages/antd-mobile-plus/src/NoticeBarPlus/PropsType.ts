/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-20 17:50:29
 */
export interface ProTrackProps {
  /**
   * @description 公告数据，服务端返回数据(数组对象)
   * @default []
   */
  data: any;
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
  extraClick?: () => void;
  /**
   * @description 公共栏的图标
   * @default null
   */
  backIcon?: React.ReactElement<any> | null;
}
