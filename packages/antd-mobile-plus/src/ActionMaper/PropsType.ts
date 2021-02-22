/*
 * @Description: 
 * @Author: qclong
 * @Date: 2021-02-20 15:44:07
 */

export interface ActionMaperCoordinateType { 
    /**
     * 经度 采用bd09，请自行转化
     */
    lat: number;
    /**
     * 纬度 采用bd09，请自行转化
     */
    lng: number;
}

export interface ActionMaperType { 
    /**
     * 经纬度，当传递经纬度时，默认不会触发ip/浏览器定位，否则会触发浏览器定位
     */
    coordinate?: ActionMaperCoordinateType;
    /**
     * 标题
     */
    title: string;
    /**
     * 详细地址
     */
    detailAddress?: string;
    /**
     * 定位后的回调
     */
    onLocation?: (c: ActionMaperCoordinateType) => void;
    
    /**
     * 右侧自定义组件
     */
    rightExt?: () => React.ReactNode;
    /**
     * 初始化地图zoom
     */
    initialzeZoom?: number; 
}
