---
title: 拉动刷新
nav:
  title: antd-mobile
  path: /antd
---

通过触发，立刻重新加载内容。

### 规则
- 可以和 `ListView` 结合使用，也可以单独使用。
- 可考虑定期自动刷新, e.g. 登录 APP 后，自动刷新首页 List。

<code src="./demos/basic.tsx" />

#### ListView 下拉刷新
<code src="./demos/basic-listview" />

<API/>

如果页面使用了对 viewport 进行缩放的高清适配方案，请自行对 distanceToRefresh 进行调整, 例如对 antd-mobile@1.x 高清方案，可设置 `distanceToRefresh = window.devicePixelRatio * 25`



