---
title: 锚点
group: 
  title: 锚点
nav:
  title: 锚点
  path: /components
---

# ScrollToAnchor

## 使用说明
> 组件内监听了`Container`区域的`onTouchStart`和`onMouseMove`事件，用来监听锚点滚动和手势滚动。如果您在pc浏览器的移动端模式下，通过鼠标滚动页面可能无法触发`onScrollIndex`事件，但这并不影响您在项目中使用，因为在手机上操作时，会触发`onTouchStart`。所以在开发调试时可以忽略此问题。

### 基础用法
<code src="./demos/basic.tsx" />

### 滚动区域
<code src="./demos/index.tsx" />

### 垂直滚动
<code src="./demos/vertical.tsx" />

<API/>


#### AnchorNavType

| 属性名 | 描述 | 类型 | 默认值
| ----- |----- |----- |----- |
| className   | 锚点容器className | string |  \- |
| style   | 锚点容器style样式 | CSSProperties | \- |
| onRenderItem   | 渲染item | (item: AnchorItemType) => React.ReactNode; | \- |


#### AnchorViewType

| 属性名 | 描述 | 类型 | 默认值
| ----- |----- |----- |----- |
| className   | 锚点容器className | string |  \- |
| style   | 锚点容器style样式 | CSSProperties | \- |
| onRenderItem   | 渲染item | (item: AnchorItemType) => React.ReactNode; | \- |
