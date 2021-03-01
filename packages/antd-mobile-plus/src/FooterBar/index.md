---
title: 底部按钮栏
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demos/demo.tsx" />
<API/>

### ToolButtonItemType
| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| text | 按钮文字 | string | - |
| type | 按钮类型 | 'disable' \| 'primary' \| 'default' | default |
| onPress | 点击事件回调| (e) => void; | - |
| id | 唯一key值 | string | 必填 |