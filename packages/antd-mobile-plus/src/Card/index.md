---
title: 卡片 Card
group:
  title: 基础组件
  path: /basic
nav:
  title: 组件
  path: /components
order: 1
---

# Card 卡片

### 介绍

卡片组件用于页面上块状的信息展示

### 引入

通过以下方式引入组件

```js
import { Card } from '@alitajs/antd-mobile-plus';
const { Header, Body, Footer } = Card;
```

### 代码演示

#### 基础使用

```js
<Card>
  <Header title='执行任务' />
  <Body>
    <div
      style={{
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      body
    </div>
  </Body>
  <Footer
    type='fill'
    btnText='查看详情'
    onClick={() => {
      console.log('click');
    }}
  />
</Card>
```

#### 右侧自定义

通过对<b>Header</b>中参数<b>extra</b>可以自定义卡片头部右侧的内容

```js
<Header title='标题' extra={<span>右侧自定义</span>} />
```

#### 左侧标题图片自定义

通过对<b>Header</b>中参数<b>thumb</b>可以自定义卡片头部左侧的内容，

```js
<Header title='执行任务' thumb={<span>图标</span>} />
```

#### 底部

底部分为三种方式，充满、右侧按钮、自定义
<br />
默认情况下 type 为 <b>fill</b>

##### 1、充满

```js
<Footer
  type='fill'
  btnText='完成任务'
  onClick={() => {
    console.log('btnclick');
  }}
/>
```

##### 2、右侧按钮

```js
<Footer
  type='single'
  btnText='完成任务'
  onClick={() => {
    console.log('btnclick');
  }}
/>
```

##### 3、自定义底部

```js
<Footer>
  <div style={{ textAlign: 'center' }}>我是自定义的底部</div>
</Footer>
```

#### 自定义卡片的样式

通过对<b>Card</b> 传入的 <b>style</b> 可以自定义卡片的样式

```js
<Card style={{ backgroundColor: '#ccc', color: 'white' }}>
  <Header title='自定义Card的样式' />
  <Body>
    <div
      style={{
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      body
    </div>
  </Body>
  <Footer>
    <div style={{ textAlign: 'center' }}>我是自定义的底部</div>
  </Footer>
</Card>
```

<API/>

## CardHeaderType

| 属性  | 说明                 | 类型            | 默认值 |
| ----- | -------------------- | --------------- | ------ |
| title | 卡片 title           | React.ReactNode |        |
| extra | 头部右侧自定义内容   | React.ReactNode |        |
| thumb | 左侧内容，可定义图片 | React.ReactNode |        |

## CardFooterType

| 属性    | 说明                             | 类型         | 默认值   |
| ------- | -------------------------------- | ------------ | -------- |
| type    | 底部类型，查看详情或者是右侧按钮 | single、fill | fill     |  |
| onClick | 底部点击事件                     | () => void   |          |
| btnText | 右侧按钮文字                     | string       | 查看详情 |

<br />
<code src="./demos/demo.tsx" />
