---
title: 内置埋点
group: 
  title: 开发指南
  path: /docs
nav:
  title: 介绍
  path: /components
order: 3
---

## 埋点

### 介绍
`antd-mobile-plus` 提供了埋点功能，根据项目需要可以直接在项目中使用，使用方式可参考一下文档。

### 使用方法
`antd-mobile-plus` 通过 `@alitajs/tracker`包实现内置组件埋点支持，可以使用 `setTracker` hooks函数来暴露埋点日志。

```typescript
// 引入tracker  
import { setTracker } from '@alitajs/tracker';
import { ActionMaper } from '@alitajs/antd-mobile-plus';

export default () => {
  // 这个方法应该统一添加
  setTracker({
    log(component, params, ext) {
      console.log(component); // 组件名
      console.log(params.version); // antd-mobile 版本号
      console.log(params.reactVersion); // react 版本号
      console.log(params.type); // 内置类型，分为 RENDERED(渲染), CUSTOM(组件自定义的上报)
      // 可选，组件额外的参数，比如 Button 会额外传 params.c1={type: props.type}
      console.log(params);
      // 可选，当 params.type===CUSTOM 的时候，组件可能会传的对应的数据
      // 比如 Button 点击的时候会传 ext='OnPress1'
      console.log(ext);
    },
  });
  return (
    <>
      <div style={{ padding: '0 0.24rem' }}>
        <ActionMaper title="地图"/>
        <br />
      </div>
    </>
  );
};

```





