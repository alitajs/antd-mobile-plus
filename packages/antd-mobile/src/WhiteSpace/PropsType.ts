import { WhiteSpaceProps } from 'antd-mobile/es/white-space';

export interface WhiteSpacePropsType extends WhiteSpaceProps {
  /**
    * @description       上下留白的间距，可选`xs`,`sm`,`md`,`lg`,`xl`
    * @description.en-US up and down margins, optional values:`xs`,`sm`,`md`,`lg`,`xl`
    * @default           `md`
    */
  size?: WhiteSpaceProps['size'];
}
