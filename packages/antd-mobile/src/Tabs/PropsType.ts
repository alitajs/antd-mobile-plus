import { TabsProps } from 'antd-mobile/es/tabs';

export interface TabsPropsType extends TabsProps {
  /**
   * @description       样式前缀
   * @description.en-US prefix class
   * @default           rmc-tabs
   */
  prefixCls?: TabsProps['prefixCls'];
  /**
   * @description       tab数据
   * @description.en-US tabs data
   */
  tabs?: TabsProps['tabs'];
  /**
   * @description       TabBar位置
   * @description.en-US TabBar's position
   * @default           top
   */
  tabBarPosition?: TabsProps['tabBarPosition'];
  /**
   * @description       替换TabBar
   * @description.en-US replace the TabBar
   */
  renderTabBar?: TabsProps['renderTabBar'];
  /**
   * @description       初始化Tab, index or key
   * @description.en-US the tab when inital, index or key
   */
  initialPage?: TabsProps['initialPage'];
  /**
   * @description       当前Tab, index or key
   * @description.en-US current tab, index or key
   */
  page?: TabsProps['page'];
  /**
   * @description       是否可以滑动内容切换
   * @description.en-US Whether to switch tabs with swipe gestrue in the content
   * @default           true
   */
  swipeable?: TabsProps['swipeable'];
  /**
   * @description       使用跟手滚动
   * @description.en-US use hand scroll
   * @default           true
   */
  useOnPan?: TabsProps['useOnPan'];
  /**
   * @description       预加载两侧Tab数量
   * @description.en-US pre-render nearby # sibling, Infinity: render all the siblings, 0: render current page.
   * @default           1
   */
  prerenderingSiblingsNumber?: TabsProps['prerenderingSiblingsNumber'];
  /**
   * @description       是否开启切换动画
   * @description.en-US Whether to change tabs with animation
   * @default           true
   */
  animated?: TabsProps['animated'];
  /**
   * @description       tab变化时触发
   * @description.en-US Callback when tab is switched
   */
  onChange?: TabsProps['onChange'];
  /**
   * @description       tab 被点击的回调
   * @description.en-US on tab click
   */
  onTabClick?: TabsProps['onTabClick'];
  /**
   * @description       销毁超出范围Tab
   * @description.en-US destroy inactive tab 
   * @default           false
   */
  destroyInactiveTab?: TabsProps['destroyInactiveTab'];
  /**
   * @description       滑动切换阈值(宽度比例)
   * @description.en-US distance to change tab, width ratio
   * @default           0.3
   */
  distanceToChangeTab?: TabsProps['distanceToChangeTab'];
  /**
   * @description       是否启用分页模式
   * @description.en-US use paged
   * @default           true
   */
  usePaged?: TabsProps['usePaged'];
  /**
   * @description       Tab方向
   * @description.en-US tab paging direction
   * @default           horizontal
   */
  tabDirection?: TabsProps['tabDirection'];
  /**
   * @description       tabBar下划线样式
   * @description.en-US style of the default tab bar's underline
   */
  tabBarUnderlineStyle?: TabsProps['tabBarUnderlineStyle'];
  /**
   * @description       tabBar背景色
   * @description.en-US color of the default tab bar's background
   */
  tabBarBackgroundColor?: TabsProps['tabBarBackgroundColor'];
  /**
   * @description       tabBar激活Tab文字颜色
   * @description.en-US color of the default tab bar's text when active
   */
  tabBarActiveTextColor?: TabsProps['tabBarActiveTextColor'];
  /**
   * @description       tabBar非激活Tab文字颜色
   * @description.en-US color of the default tab bar's text when inactive
   */
  tabBarInactiveTextColor?: TabsProps['tabBarInactiveTextColor'];
  /**
   * @description       tabBar文字样式
   * @description.en-US tional styles to the tab bar's text
   */
  tabBarTextStyle?: TabsProps['tabBarTextStyle'];
  /**
   * @description       替换TabBar的Tab
   * @description.en-US render for replace the tab of tabbar
   */
  renderTab?: TabsProps['renderTab'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
