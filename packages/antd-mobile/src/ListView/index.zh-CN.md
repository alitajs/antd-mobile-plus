---
title: ListView 长列表
group:
  title: 组合
  path: /combination
  order: 6
nav:
  title: antd-mobile
  path: /antd
---

适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果。
#### 自定义容器
> Note: you need to set `height`/`overflow` style.
<code src="./demos/basic.tsx" />

#### 索引列表（标题吸顶）
> sticky index List
<code src="./demos/idxed.tsx" />

#### 标题吸顶（body 容器)
> sticky block header to the top of the page
<code src="./demos/basic-sticky.tsx" />

#### body 容器
> ##### use html `body` as a scroll container.
<code src="./demos/basic-body.tsx" />

<API/>


### 方法

- getMetrics() - 导出一些用于性能分析的数据。
- scrollTo(...args) - 滚动到指定的x, y偏移处(暂不支持过渡动画)。


## ListView.IndexedList

此组件常用于 “通讯录”/“城市列表” 等场景中，支持索引导航功能。

> 你可以使用 ListView 上的几乎所有 APIs。
>
> 注意：由于索引列表可以点击任一项索引来定位其内容、即内容需要直接滚动到任意位置，这样就难以做到像 ListView 一样能在滚动时自动懒渲染。目前实现上只支持分两步渲染，能借此达到首屏优先显示目的，但如果列表数据量过大时、整体性能仍会有影响。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| quickSearchBarTop | 快捷导航栏最顶部按钮、常用于回到顶部 | object{value:string, label:string} | `{ value: '#', label: '#' }` |
| quickSearchBarStyle | quickSearchBar 的 style | object | - |
| onQuickSearch | 快捷导航切换时调用 | (sectionID: any, topId?:any) => void | - |
| showQuickSearchIndicator | whether show quick search indicator | bool | false |
| delayTime | 延迟渲染时间设置（用于首屏优化，一开始渲染`initialListSize`数量的数据，在此时间后、延迟渲染剩余的数据项、即`totalRowCount - initialListSize`） | number |`100ms` |
| delayActivityIndicator | 延迟渲染的 loading 指示器 | react node | - |


## 提示

ListView 有两种类型的滚动容器：

1. 局部 div 容器
    - 默认，注意：**需要手动给 ListView 设置高度**
2. html 的 body 容器
    - 设置`useBodyScroll`后生效 (不需要设置高度)

<br />

对 dataSource 对象变化时的处理方式是什么？何时调用 onEndReached 方法？

ListView 在 componentWillReceiveProps 里会监听 dataSource 对象的变化，并做一次
[`this._renderMoreRowsIfNeeded()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L156) ，
由于此时[`this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L348)
即已经渲染的数据与 dataSource 里已有的数据项个数相同，所以 ListView 认为应该再调用 onEndReached 方法。

onEndReached 为什么会不停调用？[520#issuecomment-263510596](https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596)

<br />

其他问题：[#633](https://github.com/ant-design/ant-design-mobile/issues/633) [#573](https://github.com/ant-design/ant-design-mobile/issues/573) [#541](https://github.com/ant-design/ant-design-mobile/issues/541)
