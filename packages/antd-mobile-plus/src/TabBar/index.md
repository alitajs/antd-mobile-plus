---
title: TabBar 标签栏
group:
  title: 业务组件
  path: /plus
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demos/index.tsx">

### TabBar

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活 item 的 key | string \| null | \- |
| defaultActiveKey | 初始化选中 item 的 key，如果没有设置 activeKey | string \| null | 第一个 Tab 的 key |
| onChange | 切换面板的回调 | (key: string) => void | \- |
| safeArea | 是否开启安全区适配 | boolean | false |

### TabBar.Item

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| badge | 徽标，同 Badge 属性 | object:{content:'', style:''} \| typeof Badge.dot \| string | \- |
| icon | 图标 | ReactNode \| ((active: boolean) => ReactNode) | \- |
| key | 对应 activeKey | string | \- |
| title | 标题 | ReactNode \| ((active: boolean) => ReactNode) | \- |
