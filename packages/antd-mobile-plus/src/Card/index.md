---
title: 卡片
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demos/demo.tsx" />
<API/>

## CardHeaderType

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片title | React.ReactNode| |
| extra | 头部右侧自定义内容 | React.ReactNode| |
| thumb |  左侧内容，可定义图片 | React.ReactNode| |

## CardFooterType

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 底部类型，查看详情或者是右侧按钮 | "details" | "btn"| |
| onClick | 底部点击事件 | () => void| |
| btnText |  右侧按钮文字 | string|查看详情 |
