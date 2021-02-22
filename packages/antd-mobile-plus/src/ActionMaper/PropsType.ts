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
     * 经纬度
     */
    coordinate?: ActionMaperCoordinateType;
    title: string;
    detailAddress?: string;
    onLocation?: (c:ActionMaperCoordinateType) => void;
    rightExt?: () => React.ReactNode;
    /**
     * 初始化地图zoom
     */
    initialzeZoom?: number; 
}
