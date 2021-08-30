---
title: 弹出视图
group:
  title: 基础组件
  path: /basic
nav:
  title: 组件
  path: /components
---

# Popup 弹出动画

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容。

### 引入

通过以下方式来引入组件

```js
import React from 'react';
import { Popup } from '@alitajs/antd-mobile-plus';
```

## 代码演示

### 基础用法

通过 `show` 控制弹出层是否展示。

```js
const [show, setShow] = useState(false);
return (
  <>
    <Button onClick={() => setShow(true)}>展示弹出层</Button>
    <Popup show={show} onClose={() => setShow(false)}>
      <div style={{ height: '50vh' }}>内容区域</div>
    </Popup>
  </>
);
```

### 弹出位置

通过 `mode` 属性设置弹出位置，默认从下部弹出，可以设置为 `popup`、`dropdown`、 `sliderLeft`、 `sliderRight`、`alert`;。

```js
// 从左侧弹出
<Popup show={show} onClose={() => setShow(false)} mode="sliderLeft"></Popup>
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的合适位置显示关闭图标。 图标显示位置如下：

| 弹出位置    | 关闭图标位置 |
| ----------- | ------------ |
| popup       | 右上         |
| dropdown    | 右下         |
| sliderLeft  | 右上         |
| alert       | 右上         |
| sliderRight | 左上         |

```js
// 示例代码
<Popup closeable show={show} onClose={() => setShow(false)}></Popup>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```js
// 示例代码
<Popup round show={show} onClose={() => setShow(false)}></Popup>
```

### 自定义内容区域

通过 `custom` 属性可以自定义内容区域，弹出内容区域进行自定义设置。不再受内置样式影响

```js
<Popup custom show={show} onClose={() => setShow(false)}>
  <div style={{ height: '80vh', backgroundColor: '#f40' }}>内容区域</div>
</Popup>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示 | boolean | false |
| mode | 弹出框方向，可以取值：`popup`、`dropdown`、`sliderLeft`、`sliderRight`、`alert` | string | `popup` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭视图 | boolean | true |
| zIndex | 层级 | number | 1 |
| contentSize | 容器区域的尺寸 | string、number | 80% |
| closeable | 是否显示关闭图标 | boolean | false |
| round | 是否显示圆角 | boolean | false |
| custom | 自定义内容区域 | boolean | false |
| type | 弹出模式， `fullscreen`:全屏 `relative`: 相对当前控件位置弹出 | string | fullscreen |
| closeOnClickOutside | type 为`relative`时，是否在点击其他区域关闭视图 | boolean | true |
| offset | type 为`relative`时，相对起始位置偏移量 | number | 0 |
| scrollElement | 页面区域滚动节点，一般用于`type`为 relative 时使用 | HTMLElement | document.documentElement |
| awayRef | 去除目标元素，只响应目标元素之外的节点, 应用场景一般是在下拉菜单场景下配合 closeOnClickOutside 属性使用，点击页面某个区域不触发响应 | BasicTarget \| BasicTarget[] | - |

### Events

| 事件名    | 说明         | 回调参数 |
| --------- | ------------ | -------- |
| onClose   | 关闭事件     | -        |
| onEnter   | 动画即将进入 | -        |
| onEntered | 动画已经进入 | -        |
| onExit    | 动画即将退出 | -        |
| onExited  | 动画已经退出 | -        |

<!-- ## 常见问题 -->

<code src="./demos/demo.tsx" />

<!-- <API/> -->
