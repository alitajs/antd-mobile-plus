import { AntTabbarProps } from 'antd-mobile/es/tab-bar';
import { TabBarItemProps } from 'antd-mobile/es/tab-bar/PropsType'


export interface TabBarPropsType extends AntTabbarProps {
    /**
     * @description tabbar 背景色     
     * @description.en-US tabbar background color
     * @default white
     */
    barTintColor?: AntTabbarProps['barTintColor'];

    /**
     * @description 选中的字体颜色
     * @description.en-US font color when tab is selected
     * @default #108ee9
     */
    tintColor?: AntTabbarProps['tintColor'];

    /**
     * @description 未选中的字体颜色 
     * @description.en-US font color when tab is unselected
     * @default #888
     */
    unselectedTintColor?: AntTabbarProps['unselectedTintColor'];

    /**
     * @description 是否隐藏
     * @description.en-US Whether hidden or not
     * @default false
     */
    hidden?: AntTabbarProps['hidden'];

    /**
     * @description 样式前缀
     * @description.en-US prefix className
     * @default 
     */
    prefixCls?: AntTabbarProps['prefixCls'];

    /**
     * @description 不渲染内容部分
     * @description.en-US can't render content
     * @default false
     */
    noRenderContent?: AntTabbarProps['noRenderContent'];

    /**
     * @description 预加载相邻的tab内容, Infinity: 加载所有的tab内容, 0: 仅加载当前tab内容, 当页面较复杂时，建议设为0，提升页面加载性能
     * @description.en-US pre-render nearby sibling, Infinity:render all the siblings, 0: only render current page 
     * @default 
     */
    prerenderingSiblingsNumber?: AntTabbarProps['prerenderingSiblingsNumber'];

    /**
     * @description tabbar 位置
     * @description.en-US tabbar position
     * @default white
     */
    tabBarPosition?: AntTabbarProps['tabBarPosition'];
}

export interface TabBarItemPropsType extends TabBarItemProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;

    /**
     * @description       徽标数
     * @description.en-US badge number
     */
    badge?: TabBarItemProps['badge'];

    /**
     * @description       是否在右上角显示小红点（在设置badge的情况下失效）
     * @description.en-US Whether display a red dot or not (dot will invalid when you set badge)
     * @default false 
     */
    dot?: TabBarItemProps['dot'];
    /**
     * @description       bar 点击触发，需要自己改变组件 state & selecte={true}
     * @description.en-US on press the bar, need change component by yourself. state & selecte={true}
     */
    onPress?: TabBarItemProps['onPress'];

    /**
     * @description 是否选中
     * @description.en-US Whether is selected or not
     * @default false 
     */
    selected?: TabBarItemProps['selected'];

    /**
     * @description 默认展示图片
     * @description.en-US the default icon
     */
    icon?: TabBarItemProps['icon'];

    /**
     * @description 选中后的展示图片
     * @description.en-US the icon of selected
     */
    selectedIcon?: TabBarItemProps['selectedIcon'];

    /**
     * @description 标题文字
     * @description.en-US title
     */
    title: TabBarItemProps['title'];

    /**
     * @description  唯一标识
     * @description.en-US unique identification
     */
    key: string;
}
