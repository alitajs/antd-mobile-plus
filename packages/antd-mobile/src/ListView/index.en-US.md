---
title: ListView 长列表
group:
  title: Combination
  path: /combination
  order: 6
nav:
  title: antd-mobile
  path: /antd
---

It is suitable for displaying the long list data type of the same kind, and has certain optimization effect on the rendering performance.

#### custom container
> Note: you need to set `height`/`overflow` style.
<code src="./demos/basic.tsx" />

#### index List (title sticky)
> sticky index List
<code src="./demos/idxed.tsx" />

#### title sticky (use `<body>` container)
> sticky block header to the top of the page
<code src="./demos/basic-sticky.tsx" />

#### use `<body>` container
> ##### use html `body` as a scroll container.
<code src="./demos/basic-body.tsx" />


<API/>

### Methods

- getMetrics() - Exports some data, e.g. for perf investigations or analytics.
- scrollTo(...args) - Scrolls to a given x, y offset(not support smooth animation).


## ListView.IndexedList

This component is often used in the "Contacts" / "city list" scenes, support for index navigation.

> You can use almost all APIs on the ListView.
>
> Note: Only two-step rendering is supported, so that the first screen priority display can be achieved, but if the list data volume is too large, the overall performance will still be affected.


Properties | Descrition | Type | Default
-----------|------------|------|--------
| quickSearchBarTop | top button object of navigation bar | object{value:string, label:string} | `{ value: '#', label: '#' }` |
| quickSearchBarStyle |  quickSearchBar's style | object | - |
| onQuickSearch | fire on clicking navigation bar. | (sectionID: any, topId?:any) => void | - |
| showQuickSearchIndicator | whether show quick search indicator | bool | false |
| delayTime | delay rendering time setting (for the first screen optimization, the initial rendering of the number of `initialListSize` data, after which time rendering the remaining data items, ie `totalRowCount - initialListSize`) | number |`100ms` |
| delayActivityIndicator | the loading indicator for delayed rendering. | react node | - |


## Tips

ListView has two types of scroll containers:

1. Partial div container
    - default, note: **need to manually set the height of the ListView**
2. html body container
    - set `useBodyScroll` to take effect (do not need to set height)