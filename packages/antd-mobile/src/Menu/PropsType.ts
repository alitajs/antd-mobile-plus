import { MenuProps } from 'antd-mobile/es/menu/PropsType';

export interface MenuPropsType extends MenuProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     * @default 
     */
    ext?: any;

    /**
     * @description       数据(isLeaf 设置后 children 无效)
     * @description.en-US `Menu` data（children will be ignored when `isLeaf` is true） 
     * @default []
     */
    data?: MenuProps['data'];
    /**
     * @description       菜单级数，可选1/2
     * @description.en-US `Menu` levels, available values: `1`, `2`.
     * @default 2
     */
    level?: MenuProps['level'];
    /**
     * @description       初始值，一级和二级筛选数据的`value`组成的数组。在多选状态下，如果为二级菜单，则数组的第一个元素为一级菜单的选项，数组的第二个元素是一个数组，里面包含了二级菜单的多选项；如果为一级菜单，则数组所有元素都是多选项 
     * @description.en-US Selected value of `Menu`, it's a array which includes first and second level's `value`. When menu is in multiple select mode, if level is `1`, all values of array mean multiple select options; if level is `2`, the first value of array means first level's option, second value is an array of submenu values
     * @default []
     */
    value?: MenuProps['value'];
    /**
     * @description       选择后的回调函数
     * @description.en-US callback called when menu item is selected 
     * @default 
     */
    onChange?: MenuProps['onChange'];
    /**
     * @description       多选状态下确认按钮回调
     * @description.en-US  callback called when okey button is pressed
     * @default 
     */
    onOk?: MenuProps['onOk'];
    /**
     * @description       多选状态下取消按钮回调
     * @description.en-US fire when cancel button is pressed;
     * @default 
     */
    onCancel?: MenuProps['onCancel'];
    /**
     * @description       筛选组件的高度
     * @description.en-US height of menu component
     * @default document.documentElement.clientHeight / 2
     */
    height?: MenuProps['height'];
    /**
     * @description       筛选组件的高度
     * @description.en-US whether multiple selection
     * @default false
     */
    multiSelect?: MenuProps['multiSelect'];
}
