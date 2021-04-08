---
title: 日期选择
nav:
  title: antd-mobile
  path: /antd
---

Used to select a date or time.

### Rules
- A maximum of five independent rollers are shown, each of which represents a different value.


## API

<code src="./demos/basic.tsx" />
<code src="./demos/form.tsx" />
<API/>

Note: The date strings have different implementations in different browsers. For example, `new Date ('2017-1-1')` is an Invalid Date on Safari but is parsed properly on Chrome.

Note: We suggest DatePicker's children to be `List.Item`, if not, you need to be a custom component which accept and handle `onClick` / `extra` / `chidlren` props, see [demo](https://mobile.ant.design/components/date-picker)