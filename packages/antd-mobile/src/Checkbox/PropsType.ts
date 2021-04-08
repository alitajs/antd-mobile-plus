import { CheckboxPropsType as CheckboxProps } from 'antd-mobile/es/checkbox/PropsType';

export interface CheckboxPropsType extends CheckboxProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     */
    ext?: any;
    /**
     * @description       初始是否选中	
     * @description.en-US whether is checked when init	
     */
    defaultChecked?: CheckboxProps['defaultChecked'];
    /**
     * @description       指定当前是否选中
     * @description.en-US whether is checked now (Controlled Mode)		
     */
    checked?: CheckboxProps['checked'];
    /**
     * @description      是否可点击
     * @description.en-US whether is been disabled
     */
    disabled?: CheckboxProps['disabled'];
    /**
     * @description       change 事件触发的回调函数
     * @description.en-US callback when check status is changed
     */
    onChange?: CheckboxProps['onChange'];

}
