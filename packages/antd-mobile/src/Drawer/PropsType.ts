import { DrawerProps } from 'antd-mobile/es/drawer';

export interface DrawerPropsType extends DrawerProps {
  /**
   * @description       抽屉里的内容
   * @description.en-US The sidebar content.
   */
  sidebar?: DrawerProps['sidebar'];
  /**
   * @description       open 状态切换时调用
   * @description.en-US Callback called when open state of `Drawer` changes.
   */
  onOpenChange?: DrawerProps['onOpenChange'];
  /**
   * @description       开关状态
   * @description.en-US If the sidebar should be open.
   * @default           false
   */
  open?: DrawerProps['open'];
  /**
   * @description       抽屉所在位置
   * @description.en-US Position of `Drawer`.
   * @default           'left', enum{'left', 'right', 'top', 'bottom'}
   */
  position?: DrawerProps['position'];
  /**
   * @description       -
   * @description.en-US -
   * @default           {}
   */
  sidebarStyle?: DrawerProps['sidebarStyle'];
  /**
   * @description       -
   * @description.en-US -
   * @default           {}
   */
  contentStyle?: DrawerProps['contentStyle'];
  /**
   * @description       -
   * @description.en-US -
   * @default           {}
   */
  overlayStyle?: DrawerProps['overlayStyle'];
  /**
   * @description       -
   * @description.en-US -
   * @default           {}
   */
  dragHandleStyle?: DrawerProps['dragHandleStyle'];
  /**
   * @description       是否开启触摸手势
   * @description.en-US If touch gestures should be enabled
   * @default           true
   */
  touch?: DrawerProps['touch'];
  /**
   * @description       是否开启动画
   * @description.en-US If transitions should be enabled.
   * @default           true
   */
  transitions?: DrawerProps['transitions'];
  /**
   * @description       是否嵌入到正常文档流里
   * @description.en-US If the sidebar should be docked in document.
   * @default           false
   */
  docked?: DrawerProps['docked'];
  /**
   * @description       是否禁止 dragHandle
   * @description.en-US If dragHandle should be enabled
   * @default           false
   */
  enableDragHandle?: DrawerProps['enableDragHandle'];
  /**
   * @description       打开关闭抽屉时距 sidebar 的拖动距离
   * @description.en-US Distance the sidebar has to be dragged before it will open/close after it is released.
   * @default           30
   */
  dragToggleDistance?: DrawerProps['dragToggleDistance'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
