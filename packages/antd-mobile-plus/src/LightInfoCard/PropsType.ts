/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-22 16:54:51
 */
export interface DataItemProps {
  title?: string;
  value?: string;
}

export interface LightInfoCardType {
  /**
   * @description 类名
   */
  className?: string;

  /**
   * @description meta卡片标题
   */
  title?: string;

  /**
   * @description meta卡片数据
   */
  dataSource?: Array<DataItemProps>;

  /**
   * @description meta卡片图片防止方向（left/right）
   */
  imgPlacement?: string;

  /**
   * @description meta卡片图片
   */
  imgs?: Array<React.ReactNode>;

  /**
   * @description 尾部信息
   */
  extra?: Array<string>;

  /**
   * @description 点击meta图片的回调
   */
  onClickImg?: () => void;

/**
 * @description style样式
 */
  style?: React.CSSProperties;
}
