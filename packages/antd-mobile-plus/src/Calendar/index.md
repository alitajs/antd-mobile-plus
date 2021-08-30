---
title: 日历 Calendar
group:
  title: 基础组件
  path: /basic
nav:
  title: 日历
  path: /components
---

# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

通过以下方式来引入组件

```js
import React from 'react';
import { Calendar } from '@alitajs/antd-mobile-plus';
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 `onConfirm` 事件。

```js
import React, { useState } from 'react';
import { Calendar } from '@alitajs/antd-mobile-plus';

const CalendarItem = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>选择单个日期</Button>
      <Calendar
        show={show}
        onClose={() => setShow(false)}
        onConfirm={(date) => {
          console.log(date);
        }}
      ></Calendar>
    </>
  );
};

export default CalendarItem;
```

### 选择多个日期

设置 `type` 为 `multiple` 后可以选择多个日期，此时 `onConfirm` 事件返回的 date 为数组结构，数组包含若干个选中的日期。

```js
import React, { useState } from 'react';
import { Calendar } from '@alitajs/antd-mobile-plus';

const CalendarItem = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>选择多个日期</Button>
      <Calendar
        show={show}
        type="multiple"
        onClose={() => setShow(false)}
        onConfirm={(date) => {
          // 这里为数组
          console.log(date);
        }}
      ></Calendar>
    </>
  );
};

export default CalendarItem;
```

### 选择日期区间

设置 `type` 为 `range` 后可以选择日期区间，此时 `onConfirm` 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```js
import React, { useState } from 'react';
import { Calendar } from '@alitajs/antd-mobile-plus';

const CalendarItem = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>选择日期区间</Button>
      <Calendar
        show={show}
        type="range"
        onClose={() => setShow(false)}
        onConfirm={(date) => {
          // 这里为数组
          console.log(date);
        }}
      ></Calendar>
    </>
  );
};

export default CalendarItem;
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 `allowSameDay` 属性来允许选择同一天。

### 快捷选择

将 `showConfirm` 设置为 `false` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `onConfirm` 事件。

```js
<Calendar show showConfirm={false}></Calendar>
```

### 自定义颜色

通过 `color` 属性可以自定义日历的颜色，对选中日期和底部按钮生效, 底部按钮文字颜色固定为白色，如果需要调整请自定设置。

```js
<Calendar show color="#f40"></Calendar>
```

### 自定义日期范围

通过 `minDate` 和 `maxDate` 定义日历的范围。

```js
<Calendar show minDate={minDate} maxDate={maxDate}></Calendar>
```

### 自定义按钮文字

通过 `confirmText` 设置按钮文字，通过 `confirmDisabledText` 设置按钮禁用时的文字。

```js
<Calendar
  show
  confirmText="完成"
  confirmDisabledText="请选择离店时间"
></Calendar>
```

### 自定义日期文案

通过传入 `formatter` 函数来对日历上每一格的内容进行格式化。

```js
<Calendar
  show
  formatter={(day: CalendarDayItem) => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();
    if (month === 5) {
      if (date === 1) {
        day.topInfo = '劳动节';
      } else if (date === 4) {
        day.topInfo = '青年节';
      } else if (date === 11) {
        day.text = '今天';
      }
    }
    if (day.type === 'start') {
      day.bottomInfo = '入住';
    } else if (day.type === 'end') {
      day.bottomInfo = '离店';
    }
    return day;
  }}
></Calendar>
```

### 自定义弹出位置

通过 `mode` 属性自定义弹出层的弹出位置，可选值为 `popup` | `dropdown` | `sliderLeft` | `sliderRight`;。

```js
<Calendar mode="sliderLeft" show></Calendar>
```

### 日期区间最大范围

选择日期区间时，可以通过 `maxRange` 属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```js
<Calendar show type="range" maxRange={3}></Calendar>
```

### 自定义周起始日

通过 `firstDayOfWeek` 属性设置一周从哪天开始。

```js
<Calendar firstDayOfWeek="1" show />
```

### 平铺展示

将 `poppable` 设置为 `false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```js
<Calendar poppable={false} />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 选择类型:<br>`single` 表示选择单个日期，<br>`multiple` 表示选择多个日期，<br>`range` 表示选择日期区间 | string | `single` |
| title | 日历标题 | string | `日期选择` |
| color | 主题色，对底部按钮和选中日期生效 | string | `#ee0a24` |
| minDate | 可选择的最小日期 | Date | 当前日期 |
| maxDate | 可选择的最大日期 | Date | 当前日期的六个月后 |
| defaultDate | 默认选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择 | Date \| Date[] \| null | 今天 |
| rowHeight | 日期行高 | number \| string | `64` |
| formatter | 日期格式化函数 | (day: CalendarDayItem) => CalendarDayItem | - |
| poppable | 是否以弹层的形式展示日历 | boolean | `true` |
| lazyRender | 是否只渲染可视区域的内容 | boolean | `true` |
| showMark | 是否显示月份背景水印 | boolean | `true` |
| showTitle | 是否展示日历标题 | boolean | `true` |
| showSubtitle | 是否展示日历副标题（年月） | boolean | `true` |
| showConfirm | 是否展示确认按钮 | boolean | `true` |
| readonly | 是否为只读状态，只读状态下不能选择日期 | boolean | `false` |
| confirmText | 确认按钮的文字 | string | `确定` |
| confirmDisabledText | 确认按钮处于禁用状态时的文字 | string | `确定` |
| firstDayOfWeek | 设置周起始日 | 0-6 | `0` |

### Calendar Poppable Props

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示日历弹窗 | boolean | `false` |
| mode | 弹出位置，可选值为 `popup` `dropdown` `sliderLeft` `sliderRight` | string | `popup` |
| round | 是否显示圆角弹窗 | boolean | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | boolean | `true` |

### Calendar Range Props

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxRange | 日期区间最多可选天数 | number \| string | 无限制 |
| rangePrompt | 范围选择超过最多可选天数时的提示文案 | string | `最多选择 xx 天` |
| allowSameDay | 是否允许日期范围的起止时间为同一天 | boolean | `false` |

### Calendar Multiple Props

当 Calendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxRange | 日期最多可选天数 | number \| string | 无限制 |
| rangePrompt | 选择超过最多可选天数时的提示文案 | string | `最多选择 xx 天` |

### CalendarDayItem 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 `CalendarDayItem` 对象的内容

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| date | 日期对应的 Date 对象 | Date |
| type | 日期类型，可选值为 `selected`、`start`、`middle`、`end`、`disabled` | string |
| text | 中间显示的文字 | string |
| topInfo | 上方的提示信息 | string |
| bottomInfo | 下方的提示信息 | string |
| className | 额外类名 | string |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onSelect | 点击并选中任意日期时触发 | value: Date \| Date[] |
| onConfirm | 日期选择完成后触发，若 `show-confirm` 为 `true`，则点击确认按钮后触发 | value: Date \| Date[] |
| onClose | 关闭弹出层时触发 | - |
| onUnselect | 当日历组件的 `type` 为 `multiple` 时，取消选中日期时触发 | value: Date |

## 常见问题

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

# Calendar

<code src="./demos/demo.tsx">

<API/>
