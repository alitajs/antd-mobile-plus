import { ListItemPropsType } from 'antd-mobile/lib/list/PropsType';

export interface NotificationListItemType extends  ListItemPropsType {
  title?: string;
  extraAlign?: 'top' | 'middle' | 'bottom';
  onClick?: (item: NotificationListItemType) => void;
  subTitle?: string;
}

export interface NotificationType {
  /**
   * @description 消息通知
   */
  title: string;

  /**
   * @description 通知数据
   */
  dataSource?: Array<NotificationListItemType>;

  /**
   * @description 类名
   */
  className?: string;

  /**
   * @description 样式对象
   */
  style?: React.CSSProperties;
}
