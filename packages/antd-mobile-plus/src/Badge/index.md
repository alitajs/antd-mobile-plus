---
title: 徽标 Badge
group:
  title: 业务组件
  path: /plus
nav:
  title: 组件
  path: /components
---

# Badge

### 展示

<code src="./demos/index.tsx">

### 属性

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否增加描边 | boolean | false |
| color | 徽标背景色，等效于设置 --color CSS 变量 | string | \- |
| content | 徽标内容：如果传 null undefined '' 或不传，则不显示徽标；如果传 Badge.dot，会显示小红点 | React.ReactNode \| typeof Badge.dot | \- |
| wrapperClassName | Badge wrap 自定义类名 | string | \- |
| wrapperStyle | Badge wrap 自定义样式 | React.CSSProperties | \- |

### CSS

| 属性名  | 描述                       | 默认值                   | 全局变量 |
| ------- | -------------------------- | ------------------------ | -------- |
| --color | 徽标背景色                 | var(--alita-badge-color) |
| --right | 相对于最右边，向左的偏移量 |                          |
| --top   | 相对于最上边，向下的偏移量 |                          |
