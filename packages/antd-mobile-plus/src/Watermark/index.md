---
title: 水印
group:
  title: 基础组件
  path: /basic
nav:
  title: 组件
  path: /components
---

# Watermark
### 展示

<code src="./demos/demo.tsx" />

### 参数

<API />

###
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 显示水印的文本，如果要换行用`\n`隔开 | string | - |
| rotation | 文本旋转的角度，介于 -Math.PI / 2 ~ Math.PI / 2 | number | 0 |
| fontFamily | 字体类型。必须是浏览器中已有的字体 | string | `serif` |
| fontColor | 文字的颜色 | string | `white` |
| fontSize | 字号 | number | 16 |
| lineHeight | 行高 | number | 20 |
| gap | 水印的列表间距 | number | 50 |
| style | 样式对象 | object | - |
