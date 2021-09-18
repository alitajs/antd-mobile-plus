---
title: 收缩卡片 AccordionCard
group:
  title: 基础组件
  path: /basic
nav:
  title: 组件
  path: /components
---

# AccordionCard 收缩卡片

### 介绍

收缩卡片用于页面上信息的展示，底部可点击收缩卡片

### 引入

可以通过以下方式引入组件使用

```js
import { AccordionCard } from '@alitajs/antd-mobile-plus';
```

### 基础使用

根据设置 <b>isExtand</b>初始值，控制首次展示折叠或者打开

```js
const [isExtand, setIsExtand] = useState(true);
const onChange = (e: boolean) => {
  setIsExtand(e);
};
<AccordionCard
  title='我是标题'
  extra='右侧扩展'
  isExtand={isExtand}
  onChange={onChange}
>
  <div style={{ height: '5rem' }}></div>
</AccordionCard>;
```

<API/>
<br>
<code src="./demos/demo.tsx" />
