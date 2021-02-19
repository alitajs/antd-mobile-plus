---
title: 评分组件
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demos/basic.tsx" />


### 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| score | 点亮星星评分 | number | 无 |
| maxScore | 满分值，默认为5 | number | 5 |
| onChange | 星星变化事件 | (n: number) => void | 无 |