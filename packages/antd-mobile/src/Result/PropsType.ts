import { ResultProps } from 'antd-mobile/es/result';

export interface ResultPropsType extends ResultProps {
  /**
   * @description       插图 url
   * @description.en-US image url
   */
  imgUrl?: ResultProps['imgUrl'];
  /**
   * @description       插图元素 (可以为`<img src="" />`/`<Icon type="" />`等), 会覆盖 imgUrl 设置
   * @description.en-US image node (could be `<img src="" />` or `<Icon type="" />`), which will override `imgUrl`
   */
  img?: ResultProps['img'];
  /**
   * @description       title 文案
   * @description.en-US title of result page
   */
  title?: ResultProps['title'];
  /**
   * @description       message 文案
   * @description.en-US message text of result page
   */
  message?: ResultProps['message'];
  /**
   * @description       按钮文案
   * @description.en-US text of built-in button
   */
  buttonText?: ResultProps['buttonText'];
  /**
   * @description       请参考 button 的配置
   * @description.en-US type of built-in button
   */
  buttonType?: ResultProps['buttonType'];
  /**
   * @description       按钮回调函数
   * @description.en-US callback of clicking built-in button
   */
  onButtonClick?: ResultProps['onButtonClick'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
