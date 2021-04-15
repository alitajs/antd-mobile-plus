import { FlexProps } from 'antd-mobile/es/flex/Flex';

export interface FlexPropsType extends FlexProps {
    /**
     * @description  项目定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse`, RN 仅支持`row`,`column`        
     * @description.en-US  how flex items are placed in the flex container，value could be `row`,`row-reverse`,`column`,`column-reverse`, RN only support `row`,`column`  
     * @default      `row`       
     */
    direction?: FlexProps['direction'];
    /**
     * @description     子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse`, RN 仅支持`nowrap`,`wrap`     
     * @description.en-US    the wrap way of sub-elements，option `nowrap`,`wrap`,`wrap-reverse`,RN only support `nowrap`,`wrap`
     * @default          `nowrap`   
     */
    wrap?: FlexProps['wrap'];
    /**
     * @description      子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around`    
     * @description.en-US    the way of alignment for sub-elements of main axis, option `start`,`end`,`center`,`between`,`around`
     * @default          `start`   
     */
    justify?: FlexProps['justify'];
    /**
     * @description   子元素在交叉轴上的对齐方式，可选`start`,`center`,`end`,`baseline`,`stretch` RN仅支持`start`,`end`,`center`,`stretch`        
     * @description.en-US  the way of alignment for sub-elements of cross-axis, option `start`,`center`,`end`,`baseline`,`stretch` RN only support `start`,`end`,`center`,`stretch`  
     * @default             `center`
     */
    align?: FlexProps['align'];
    /**
     * @description    有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch`      
     * @description.en-US   the way of alignment when have multiple axes,  option `start`,`end`,`center`,`between`,`around`,`stretch` 
     * @default       `stretch`      
     */
    alignContent?: FlexProps['alignContent'];
}
