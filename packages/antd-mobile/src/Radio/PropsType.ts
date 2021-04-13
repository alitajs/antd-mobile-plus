import { RadioItemPropsType } from 'antd-mobile/es/radio/PropsType';

export interface RadioPropsType extends RadioItemPropsType {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     * @default 
     */
    ext?: any;

    /**
     * @description       name
     * @description.en-US name
     * @default 
     */
    name?: RadioItemPropsType['name'];

    /**
     * @description        初始是否选中
     * @description.en-US the initial checked state 
     * @default 
     */
    defaultChecked?: RadioItemPropsType['defaultChecked'];

    /**
     * @description        设置当前选中状态
     * @description.en-US to set the current checked state
     * @default  
     */
    checked?: RadioItemPropsType['checked'];

    /**
     * @description        是否不可用
     * @description.en-US whether disablede
     * @default  
     */
    disabled?: RadioItemPropsType['disabled'];

    /**
     * @description        状态变化回调函数
     * @description.en-US a callback function, can be executed when the checked state changes
     * @default  
     */
    onChange?: RadioItemPropsType['onChange'];
}
