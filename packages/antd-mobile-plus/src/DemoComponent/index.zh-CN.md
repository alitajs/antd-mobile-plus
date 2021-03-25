---
title: 演示组件
group:
  title: 基础组件
  path: /basic
nav:
  title: 组件
  path: /components
---

这是一个按照规范编写的组件，每一个组件开发都要遵循一下规则。


#### 样式

组件的样式编写与业务重的样式编写一致，但引入的方式不同，不适用 CSS Module 的方式引入。因此样式和组件中需要声明相同的前缀，如

```less
@prefixCls: alita-demo;
```

```ts | pure
const prefixCls = 'alita-demo';
```

样式编写的时候需要额外引入所有的 less 变量，在编写样式的时候，（暂时只要求颜色）必须使用系统带的系统变量，如果系统中没有适合的变量，需要在 `@alitajs/theme` 包中增加一个。

一个最基础的 lees 文件组成为：

```less
@import '~@alitajs/theme/es/index.less';;

@prefixCls: alita-demo;

.@{prefixCls} {
  background-color: @brand-error;
}
```

如果在组件中使用到 antd-mobile 的组件，需要使用按需引入的方式来使用，如使用 button：

`
import Button from 'antd-mobile/lib/button';
`

需要在 less 文件中，额外引入样式 

`@import '~antd-mobile/lib/button/style/index';`
#### 埋点和异常

异常信息收集，导出组件必须使用从 `@alitajs/tracker` 导出的 `withError` 包裹。这将会收集组件内部错误和组件渲染错误。

数据埋点，则需要手动在组件中添加：

```ts | pure
import { useTracker } from '@alitajs/tracker';
export const DemoComponent: React.FC<DemoPropsType> = (props) => {
  const { onClick } = props;

  const log = useTracker(DemoComponent.displayName, {
    type:"primary",
  });

  return (
    <Button
      type="primary"
      onClick={(e) => {
        onClick && onClick(e);
        log('onClick');
      }}
    >
      点击收集事件
    </Button>
  );
};

DemoComponent.displayName = 'DemoComponent';


export default withError(DemoComponent);
```

如上所示，所有需要埋点的事件都需要调用 log 方法。这样项目中就不需要单独埋点。

在实际框架中，会通过 `setTracker` 重置这个 log 方法，将数据推送到私有服务上。在数据埋点平台和统一日志平台上将会产生作用。

#### 多语言国际化

有需要用到文字的地方，都需要支持多语言。组件中使用如下方式取到需要的值。

在 `packages/languages/src` 文件夹下，新建和你组件同名的文件夹，在其中添加两个文件，`en_US.ts` 和 `zh_CN.ts`。
编写你需要的变量，如

```ts
export default {
  text: '世界，你好！',
}
```

在主入口文件中引入自定义的多语言文件。如 `packages/languages/src/zh_CN.ts`

```diff
import { LocaleType } from './LocaleType'
import DemoComponent from './DemoComponent/zh_CN'
+ import Demo from './Demo/zh_CN'

export default {
  locale: 'zh_CN' as LocaleType,
  DemoComponent,
+ Demo,
}

```

这样在组件中，可以通过如下hooks方法取值。

```ts
import useCompleteLocale from '../LocaleProvider/useCompleteLocale';
export const Demo: React.FC = (props) => {
  const lang = useCompleteLocale()

  // 此处表示文件夹名称为 Demo
  return (
    <div>{lang.Demo.text}</div>
  );
};
```

### 展示

这里展示的是组件的用法，如果在 demo 中使用的是相对路径的方式引入，那相关文件将会被一起展示在页面上。为了更好的让用户可以复用我们的代码，所以可以在这里直接使用项目包名，这样的体验将和项目使用中一致。

<code src="./demos/basic.tsx" />

### 参数

<API></API>