import { WingBlankProps } from 'antd-mobile/es/wing-blank';

export interface WingBlankPropsType extends WingBlankProps {
  /**
    * @description       两翼留白的间距，可选`sm`,`md`,`lg`
    * @description.en-US left and right blank space, optional values:`sm`,`md`,`lg`
    * @default           `lg`
    */
  size?: WingBlankProps['size'];
}
