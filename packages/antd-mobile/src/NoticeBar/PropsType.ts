import { NoticeWebProps } from 'antd-mobile/es/notice-bar';

export interface NoticeBarPropsType extends NoticeWebProps {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     * @default 
     */
    ext?: any;

    /**
     * @description      NoticeBar的类型，可选：`closable` `link`
     * @description.en-US Type of NoticeBar, options: `closable` `link`
     * @default 
     */
    mode?: NoticeWebProps['mode'];

    /**
     * @description      左侧图标
     * @description.en-US Set the icon at the start position
     * @default `<Icon type={require('./trips.svg')} size="xxs" />`
     */
    icon?: NoticeWebProps['icon'];

    /**
     * @description      点击关闭或者操作区域的回调函数
     * @description.en-US  A callback function, can be executed when you close the notice or click on the operating area
     * @default 
     */
    onClick?: NoticeWebProps['onClick'];

    /**
     * @description      marquee 参数
     * @description.en-US  marquee params
     * @default `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`
     */
    marqueeProps?: NoticeWebProps['marqueeProps'];

    /**
     * @description      用于替换操作 icon 的文案
     * @description.en-US  text which is used to replace icon
     * @default 
     */
    action?: NoticeWebProps['action'];

}
