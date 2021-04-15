---
title: 标签栏
nav:
  title: antd-mobile
  path: /antd
---

Located at the bottom of the APP, to facilitate users to quickly switch between different functional modules。

### Rule
- Used as a class of APP classification, the number of tab between 3-5 is better。
- Even if a Tab is not available, do not disable or remove the Tab。
- Use Badge make a hint，stay can also know that there is content update。

### APP Tab Bar
Used for the content of the page block, control large content of a small range grouping and hidden, plays a role in keeping the interface clean and tidy.
<code src="./demos/basic.tsx" />

### Tabbar 在顶部
Make Tabbar show on the top
<code src="./demos/top-tabbar.tsx" />

### use with ListView component'
<code src="./demos/listview-tabbar.tsx" />

# TabBarPropsType
<API src="./index.tsx"/>

# TabBarItemPropsType
<API src="./tabItem.tsx" exports='["default"]'/>