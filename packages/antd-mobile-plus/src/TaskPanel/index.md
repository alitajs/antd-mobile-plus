---
title: 任务面板
group: 
  title: 任务面板
nav:
  title: 组件
  path: /components
---

# TaskPanel

### 展示

<code src="./demos/demo.tsx" />

### 使用说明

如果需要点击菜单下拉，请配合`SearchView`使用组件。 使用示例如下：

```javascript
import React, { FC, useState } from 'react';
import { SearchView, TaskPanel } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [leftText, setLeftText] = useState('请选择');
  const [selectId, setSelectId] = useState('011');
  return <SearchView
        placeholder="请输入"
        showLeft={true}
        leftText={leftText}
        open={open}
        onRenderPanel={<TaskPanel
          data={data}
          selectId={selectId}
          onSelected={(item) => {
            setSelectId(item.id);
            setOpen(false);
          }}
        />}
        onToggoleHandle={(on) => {
          setOpen(on);
        }}
      />
};


export default Demo;

```

<API/>