---
title: 快速上手
group: 
  title: 开发指南
  path: /docs
  order: 1
nav:
  title: 介绍
  path: /components
order: 0
---

## 介绍
通过本章节你可以了解到 `antd-mobile-plus` 的安装方法和基本使用姿势。

## 安装
在现有项目中使用 `antd-mobile-plus` 时，可以通过 `npm` 或 `yarn` 进行安装：

```javascript
// 安装
$ yarn add @alitajs/antd-mobile-plus

// 升级到指定版本
$ yarn add @alitajs/antd-mobile-plus@x.x.x

// 升级到最新版本
$ yarn add @alitajs/antd-mobile-plus@latest

```

## 示例代码

```typescript
import React, { FC } from 'react';
import { ActionMaper } from '@alitajs/antd-mobile-plus';
const Demo: FC = (props) => {
  return (
      <ActionMaper
        title="执行位置"
        detailAddress="四川省成都市金牛区马鞍东路11号马鞍东路小区附近45米"
        coordinate={{
          lat: 33.914889,
          lng: 114.404449,
        }}
        initialzeZoom={8}
      />
  );
};
export default ActionMaper.MapApiLoaderHOC({
  ak: 't9A84QM5lt6a3SMumuQOQtvM2spIQQ2A',
})(Demo);

```
