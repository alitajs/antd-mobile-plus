import { AccordionProps } from 'antd-mobile/es/accordion';

export interface AccordionPropsType extends AccordionProps {
  /**
   * @description       当前激活 tab 面板的 key
   * @description.en-US current active Panel key
   * @default           默认无，accordion模式下默认第一个元素
   */
  activeKey?: AccordionProps['activeKey'];
  /**
   * @description       初始化选中面板的 key
   * @description.en-US 无
   */
  defaultActiveKey?: AccordionProps['defaultActiveKey'];
  /**
   * @description       切换面板的回调
   * @description.en-US called when collapse Panel is changed
   * @default           noop
   */
  onChange?: AccordionProps['onChange'];
  /**
   * @description       `手风琴`模式
   * @description.en-US accordion mode
   * @default           false
   */
  accordion?: AccordionProps['accordion'];
  /**
   * @description       设置自定义切换动画，禁止动画可设为`{}`
   * @description.en-US set the custom switch animation, disable the animation can be set to `{}`
   * @default           参考 rc-collapse/lib/openAnimationFactory.js 文件
   */
  openAnimation?: AccordionProps['openAnimation'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
