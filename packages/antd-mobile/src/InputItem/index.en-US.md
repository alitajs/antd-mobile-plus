---
title: InputItem 文本输入
group:
  title: 数据录入
  path: /data-entry
  order: 2
nav:
  title: antd-mobile
  path: /antd
---


A foundational component for inputting text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.
- Handle text with a specific format, eg: hide password.

## API

**`InputItem` must wrapped by a [List](https://mobile.ant.design/components/list)**

### Basic
> Recommended use of rc-form for controlled component.
<code src="./demos/basic.tsx" />

### Error verification
<code src="./demos/error.tsx" />

### Money input
> Recommended use of rc-form for controlled component.
<code src="./demos/money.tsx" />

<API/>

> Note: Do not set `value` asynchronously in the `onChange` event of the controlled component, otherwise Chinese input may cause problems, [related issue](https://github.com/facebook/react/issues/3926).
>
> Note: `InputItem` does not support negative number if `type` is text, you can use `type=text` to do that.
>
> Note: When use `moneyKeyboardHeader`, only one `InputItem` which `type=money` is allowed on one page.

## InputItem Instance methods

Property | Description | Type | Default
----|-----|------|------
| focus    | Force focus back onto the input node  | (): void |  -  |