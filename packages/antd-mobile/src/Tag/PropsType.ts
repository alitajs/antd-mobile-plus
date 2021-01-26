import { TagProps } from 'antd-mobile/es/tag';

export interface TagPropsType extends TagProps {
  /**
    * @description       小号标签
    * @description.en-US Whether to show a smaller size
    * @default           `false`
    */
  small?: TagProps['small'];
  /**
   * @description       是否不可用
   * @description.en-US Whether is disabled
   * @default           `false`
   */
  disabled?: TagProps['disabled'];
  /**
  * @description       是否关闭（非 disabled small 状态）
  * @description.en-US Whether can be closed(invalid in `small` or `disabled` mode)
  * @default           `false`
  */
  closable?: TagProps['closable'];
  /**
  * @description       是否默认选中
  * @description.en-US Whether is selected by default
  * @default           `false`
  */
  selected?: TagProps['selected'];
  /**
   * @description       切换选中回调函数
   * @description.en-US The callback function that is triggered when the selected state changes.
   */
  onChange?: TagProps['onChange'];
  /**
   * @description       点关闭时的回调函数
   * @description.en-US The callback function that is triggered when the tag is closed.
   */
  onClose?: TagProps['onClose'];
  /**
  * @description       关闭后的回调
  * @description.en-US The callback function that is triggered after close.
  */
  afterClose?: TagProps['afterClose'];
  /**
  * @description       埋点自定义数据
  * @description.en-US tracker
  */
  ext?: any;
}
