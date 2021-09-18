---
title: 筛选项 FilterItems
group:
  title: 业务组件
  path: /plus
nav:
  title: 组件
  path: /components
---

# FilterItems 筛选项

### 介绍

筛选组件主要用来对不同类型的条件进行选择，可以单个选择器，也可以多个，但是建议最多三个，因为超过三个，整体看起来不是很好看

### 引入

通过以下方式引入组件

```js
import { FilterItems } from '@alitajs/antd-mobile-plus';
```

### 单个使用

```js
const singleData = [
  {
    data: [
      { id: '1', label: '单个使用' },
      { id: '2', label: '任务来源2' },
      { id: '3', label: '全部3' },
    ],
    filterId: 'f_1',
    defaultText: '地区',
  },
];
<FilterItems
  data={singleData}
  onItemChange={(data: any) => {
    console.log(data);
  }}
/>;
```

### 多个使用

实际项目中，字段名称与组件当中的字段会有同，可以根据 <b>alias</b> 来更改参数。
在使用多个时，<b>filterId</b> 用来判断当前点击是那种类型的数据。
```js
const mutilData = [
  {
    data: [
      { id: '1', value: '排序不限1' },
      { id: '2', value: '任务来源2' },
      { id: '3', value: '全部3' },
    ],
    filterId: 'f_1',
    defaultText: '地区',
  },
  {
    data: [
      { id: '21', value: '全部2' },
      { id: '22', value: '任务来源2' },
      { id: '23', value: '全部' },
      { id: '24', value: '排序-不限2' },
    ],
    filterId: 'f_2',
    defaultText: '商区',
  },
  {
    data: [
      { id: '31', value: '这个名字很长这个名字很长3' },
      { id: '32', value: '任务来源3' },
      { id: '33', value: '全部3' },
    ],
    filterId: 'f_3',
  },
];
<FilterItems
  data={mutilData}
  onItemChange={(data: any) => {
    console.log(data);
  }}
  alias={{ label: 'value' }}
/>;
```

<API/>
<br />
<code src="./demos/basic.tsx" />
