---
title: 表格
group: 
  title: 业务组件
  path: /plus
nav:
  title: 组件
  path: /components
---

# Table
### 展示

<code src="./demos/demo.tsx" />

### 参数

<API />

###
属性说明：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据数组 | any[] | - |
| columns | 表格列的配置 | ColumnProps[] | - |
| twoDimension | 是否是二维表格 | boolean | false |

Column属性说明:

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | React.ReactNode | - |
| dataIndex | 数据指向 | string | - |
| width | 列宽，百分比值 | number | - |
| key | 关键帧 | string | - |
| align | 对齐 | string，有'center/flex-start/flex-end' | 'flex-start' |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | Function(text, record, index) {} | - |

