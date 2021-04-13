import { ListProps } from 'antd-mobile/es/list';

export interface ListPropsType extends ListProps {
    /**
     * @description       list footer
     * @description.en-US list footer
     * @default 
     */
    renderHeader?: ListProps['renderHeader'];
    /**
     * @description       list heder
     * @description.en-US list heder
     * @default 
     */
    renderFooter?: ListProps['renderFooter'];
}
