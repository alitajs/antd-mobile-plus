import ButtonProps from 'antd-mobile-v2/lib/button';

export interface CopyBtnType {
  /**
   * @description 需要复制的信息
   */
  value: string;

  /**
   * @description 复制按钮显示的文本
   */
  text?: string;

  /**
   * @description 复制按钮属性设置，同antd按钮及普通按钮设置
   */
  btnAttr?: ButtonProps;
}
