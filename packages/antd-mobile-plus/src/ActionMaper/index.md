---
title: 定位地图块
group:
  title: 业务组件
  path: /plus
nav:
  title: 组件
  path: /components
---

# ActionMaper 定位地图

## 介绍
定位地图块是一个模块组件，该组件是基于百度地图开发，可以重新定位

## 引入
```javascript
import React from 'react';
import { Calendar } from '@alitajs/antd-mobile-plus';
```

## 代码演示
### 基础用法
```javascript
import React from 'react';
import { ActionMaper } from '@alitajs/antd-mobile-plus';

const Demo: FC = (props) => {
  return (<ActionMaper title="执行位置" detailAddress="正在获取位置信息..." />);
};

export default ActionMaper.MapApiLoaderHOC({
  ak: 'YqLjyHLyywp2A1EP9lWh0HfSCGeIWOYr',
})(Demo);
```

### 自定义中心点位置
```javascript
<ActionMaper 
  title="自定义中心点位置" 
  detailAddress="四川省成都市金牛区马鞍东路11号马鞍东路小区附近45米" 
  coordinate={{
    lat: 33.914889,
    lng: 114.404449,
  }} 
/>
```

### 自定义右侧图标
```javascript
<ActionMaper 
  title="执行位置" 
  detailAddress="正在获取位置信息..." 
  rightExt={() => <div style={{ color: 'red' }}>自定义按钮</div>} 
/>
```

### 初始化地图比例
```javascript
<ActionMaper title="执行位置" detailAddress="正在获取位置信息..." initialzeZoom={8} />
```

### 添加自定义覆盖物

```javascript
import Label from 'react-bmapgl/Overlay/Label';

const mapRef = useRef(null);

<ActionMaper
  mapRefCallback={(ref: null) => {
    mapRef.current = ref;
  }}
  title="执行位置"
  detailAddress="四川省成都市金牛区马鞍东路11号马鞍东路小区附近45米"
>
  <Label
    map={mapRef}
    text="自定义文字"
    position={new (window as any).BMapGL.Point(114.40444, 33.91489)}
  />
</ActionMaper>
```



## 使用说明

1. 在页面使用时，请注意导出`ActionMaper.MapApiLoaderHOC({ ak: '百度ak',})(Demo);` 。具体可参考页面示例.
 
2. <font color='red'>**注意**</font>：使用组件内置定位，请确保网页部署在`https`上，否则在版本`iOS10`以后将无法正常定位。

<b>以下说明摘自百度官方文档：</b>
>> 1. 请求JavaScript API v3.0的定位功能时，必须获取用户授权。
>> 2. 由于Chrome、iOS10等已不再支持非安全域的浏览器定位请求，为保证定位成功率和精度，请尽快升级您的站点到HTTPS。

<code src="./demos/demo.tsx">

## API


### ActionMaperType
| 属性名 | 描述 | 类型 | 默认值
| ----- |----- |----- |----- |
| coordinate   | 经纬度，当传递经纬度时，默认不会触发ip/浏览器定位，否则会触发浏览器定位 | ActionMaperCoordinateType |  \- |
| title   | 标题 | string | \- |
| detailAddress   | 详细地址 | string | \- |
| rightExt   | 右侧自定义组件 | () => React.ReactNode; | \- |
| initialzeZoom   | 初始化地图zoom | number | 12 |
| hideZoomControl   | 隐藏zoomControl组件 | boolean | false |

### Event(事件)
| 属性名 | 描述 | 类型 | 默认值
| ----- |----- |----- |----- |
| onLocationBefore   |  开始定位 |  () => void; |  \- |
| onLocation   | 定位后的回调 | (c: ActionMaperCoordinateType) => void; | \- |
| mapRefCallback   | 返回Map的ref | (ref: any) => void; | \- |

### ActionMaperCoordinateType

| 属性名 | 描述 | 类型 | 默认值
| ----- |----- |----- |----- |
| lat   | 纬度 | number |  \- |
| lng   | 精度 | number | \- |
| province   | 省份 | string | \- |
| city   | 城市 | string | \- |
| district   | 地县 | string | \- |
| street   | 街道 | string | \- |
