---
title: 定位地图块
group:
  title: 业务组件
  path: /plus
nav:
  title: 组件
  path: /components
---

# ActionMaper
### 使用说明

1. 在页面使用时，请注意导出`ActionMaper.MapApiLoaderHOC({ ak: '百度ak',})(Demo);` 。具体可参考页面示例.
 
2. <font color='red'>**注意**</font>：使用组件内置定位，请确保网页部署在`https`上，否则在版本`iOS10`以后将无法正常定位。

> 以下说明摘自官方文档：
>> 1. 请求JavaScript API v3.0的定位功能时，必须获取用户授权。
>> 2. 由于Chrome、iOS10等已不再支持非安全域的浏览器定位请求，为保证定位成功率和精度，请尽快升级您的站点到HTTPS。

### 展示

<code src="./demos/demo.tsx">

### 参数

### 参1
<API></API>

### 参数路径
<API src="./index.tsx"></API>

#### ActionMaperCoordinateType

| 属性名 | 描述 | 类型 | 默认值
| ----- |----- |----- |----- |
| lat   | 纬度 | number |  \- |
| lng   | 精度 | number | \- |
