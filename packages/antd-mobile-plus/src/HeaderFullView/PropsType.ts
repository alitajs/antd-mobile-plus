
export interface HeaderFullViewToolItemType {
    /**
     * @description icon的地址
     * @description.en-US icon's url
     * @default '''
     */
    icon?: string;
    /**
     * @description 文字内容
     * @description.en-US text
     * @default ''
     */
    text?: string;
    /**
     * @description id
     * @description.en-US the identifier of item
     */
    id: string;
    /**
     * @description 点击事件回调
     * @description.en-US Callback called when item is clicked
     * @default 
     */
    onClick?: () => void;
}

export interface HeaderFullViewInfoType {
    /**
     * @description id
     * @description.en-US the identifier of item
     */
    id: string;
    /**
     * @description 文字标题
     * @description.en-US title
     * @default ''
     */
    label: string;
}


export interface HeaderFullViewType {

    /**
     * @description 左侧图标， 可以传递url 和 节点
     * @description.en-US left icon, options: url or ReactElement 
     * @default 
     */
    icon?: React.ReactNode | string;

    /**
     * @description 标题
     * @description.en-US title
     * @default ''
     */
    title: string;

    /**
     * @description 底部工具数据源
     * @description.en-US the dataSource of footer tools
     * @default []
     */
    tools: HeaderFullViewToolItemType[];

    /**
     * @description 右上角内容
     * @description.en-US The extra content 
     * @default <></>
     */
    extra?: React.ReactNode;

    /**
     * @description 标题下方文字内容
     * @description.en-US the content of title bottom
     */
    infos: HeaderFullViewInfoType[];
}
