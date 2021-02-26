/*
 * @Description: 
 * @Author: qclong
 * @Date: 2021-02-20 15:44:07
 */

export interface ActionMaperCoordinateType { 
    /**
     * @description 纬度 采用bd09，请自行转化
     */
    lat: number;
    /**
     *  @description 经度 采用bd09，请自行转化
     */
    lng: number;
}

export interface ActionMaperType { 

    /**
     * @description 经纬度，当传递经纬度时，默认不会触发ip/浏览器定位，否则会触发浏览器定位
     */
    coordinate?: ActionMaperCoordinateType;

    /**
     * @description 标题
     */
    title: string;

    /**
     * @description 详细地址
     */
    detailAddress?: string;

    /**
     * @description 定位后的回调
     */
    onLocation?: (c: ActionMaperCoordinateType) => void;
    
    /**
     * @description 右侧自定义组件
     */
    rightExt?: () => React.ReactNode;

    /**
     * @description 初始化地图zoom 
     * @default 12
     */
    initialzeZoom?: number; 

    /**
     * @description 隐藏zoomControl组件
     * @default false
     */
    hideZoomControl?: boolean; 
}
