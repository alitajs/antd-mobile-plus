---
title: PullToRefresh 拉动刷新
group:
  title: Gesture
  path: /gesture
  order: 5
nav:
  title: antd-mobile
  path: /antd
---

Instantly reload the content by triggering.

### Rules
- Can be used in conjunction with `ListView` or alone.
- Can be considered regular automatic refresh, e.g. login APP, automatically refresh the first page List.


<code src="./demos/basic.tsx" />

#### ListView pull to refresh
<code src="./demos/basic-listview" />

<API/>

If the page uses a high-definition adaptation scheme that zooms the viewport。 Please modify `distanceToRefresh`。 for example, the high-definition of antd-mobile@1.x, you need set to `distanceToRefresh = window.devicePixelRatio * 2`