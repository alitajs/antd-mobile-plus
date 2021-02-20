---
title: 流程轨迹
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demos/basic.tsx" />

### 参数

| 属性     | 描述                         | 类型                              | 默认值       |
| -------- | ---------------------------- | --------------------------------- | ------------ |
| data     | 流程数据                     | 服务端返回的数据                  | []           |
| linkMap  | 要展示的流程字段             | LinkMapProps[{key,label,isPhone}] | []           |
| cTimeKey | 流程轨迹头部的时间值的字段名 | string                            | createTime   |
| tNameKey | 每个流程节点标题的字段名     | string                            | traceName    |
| down     | 每个流程节点标题的字段名     | boolean                           | true         |
| empty    | 没有数据展示的样式           | React.ReactNode                   | 暂无流程数据 |
