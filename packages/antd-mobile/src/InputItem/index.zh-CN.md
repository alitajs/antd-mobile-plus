---
title: InputItem 文本输入
group:
  title: Data Entry
  path: /data-entry
  order: 2
nav:
  title: antd-mobile
  path: /antd
---

用于接受单行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。

## API

**`InputItem` 必须用 [List](https://mobile.ant.design/components/list) 组件包裹才能正常使用**

### 基本
> 受控组件建议使用(rc-form )
<code src="./demos/basic.tsx" />

### 错误验证
<code src="./demos/error.tsx" />

### 金额键盘
> 受控组件建议使用(rc-form )
<code src="./demos/money.tsx" />


<API/>

1. 注意: 不要在受控组件的 `onChange` 事件中异步设置 `value`，否则中文输入可能带来问题，[相关问题参考](https://github.com/facebook/react/issues/3926)。

2. 注意: `InputItem` 当 `type=number` 时不支持输入负号, 你可以利用 `type=text` 来自己实现。

3. 注意: 使用 `moneyKeyboardHeader` 时，页面中只能有一个 `type=money` 的 `InputItem`。

## InputItem methods

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| focus    | 使 input 聚焦  | (): void |  -  |