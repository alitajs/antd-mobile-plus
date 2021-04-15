---
title: 图标
nav:
  title: antd-mobile
  path: /antd
---

## Naming Conventions

Each icon has its own semantic naming，the naming rules are as follows:

- The solid and line icons have same name，we use `-o` to distinguish it. eg: `question-circle` (solid icon), `question-circle-o` (line icon)
- Sequence in naming: `[icon name]-[shape(optional)]-[`-o` or not]-[direction(optional)]`。

## How to Use

```html
<Icon type="check" />
```

### Tips

Now, we only support the built-in 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up' , 'left', 'right', 'ellipsis', 'loading' these icon types.

**No longer support other custom type of icon**. If you need to use custom icon type, there are several ways:

1. view svg icon document for 1.x => 2.0 in [/docs/react/upgrade-notes](/docs/react/upgrade-notes#1.x-=>-2.0)
2. Use your own iconfont file
3. Other methods, you can reuse the `.am-icon` style name we have provided


<code src="./demos/basic.tsx" />

<code src="./demos/size.tsx" />

<API/>