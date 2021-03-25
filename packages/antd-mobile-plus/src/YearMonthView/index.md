---
title: 年月
group: 
  title: 业务组件
  path: /plus
nav:
  title: 组件
  path: /components
---

# YearMonthView
## 注意
<font color='red'>注意</font>：
1. 日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的，请不要使用。
2. `new Date(2017, 6, 30)` 实际对应日期是：`2017年7月30日`，因为月份是从`0`开始`11`结束。

### 展示

<code src="./demos/demo.tsx" />
<API/>