import { CSSProperties } from 'react'
export interface CardHeaderType {
  /**
   * @description 卡片title
   */
  title?: React.ReactNode;
  /**
   * @description 右侧自定义内容
   */
  extra?: React.ReactNode;
  /**
   * @description title 左侧内容，可定义图片
   */
  thumb?: React.ReactNode;

  /**
   * @description style
   */
  style?: CSSProperties;
}
export interface CardFooterType {
  /**
   * @description 卡片底部内容
   * @default 为空
   */
  type?: 'fill' | 'single';
  /**
   * @description 底部的点击事件
   */
  onClick?: () => void;
  /**
   * @description 按钮字体
   * @default
   */
  btnText?: string;

  /**
   * @description style
   */
  style?: CSSProperties;
}


export interface CardBodyType {
  /**
   * @description style
   */
  style?: CSSProperties;
}

export interface CardType {
  /**
   * @description style
   */
  style?: CSSProperties;
}
