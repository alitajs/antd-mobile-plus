---
title: 标签栏
nav:
  title: antd-mobile
  path: /antd
---

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

### 规则
- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

### APP 型选项卡
多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。
<code src="./demos/basic.tsx" />

### Tabbar 在顶部
控制 Tabbar 显示在顶部
<code src="./demos/top-tabbar.tsx" />

### 与ListView结合使用
<code src="./demos/listview-tabbar.tsx" />

# TabBarPropsType
<API src="./index.tsx"/>

# TabBarItemPropsType
<API src="./tabItem.tsx" exports='["default"]'/>
