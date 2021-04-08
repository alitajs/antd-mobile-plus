---
title: 日期选择
nav:
  title: antd-mobile
  path: /antd
---

用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。


<code src="./demos/basic.tsx" />

<code src="./demos/form.tsx" />


<API/>

注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。

注意：`DatePicker` children 建议是 `List.Item`, 如果不是，需要是自定义组件(组件内需处理 `onClick` / `extra` / `children` 属性，详情请看 [demo](https://mobile.ant.design/components/date-picker)

