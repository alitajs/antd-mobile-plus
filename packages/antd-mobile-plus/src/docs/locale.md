---
title: 国际化
group: 
  title: 开发指南
  path: /docs
nav:
  title: 组件
  path: /components
order: 4
---

## 国际化

### 介绍
`antd-mobile-plus` 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

### 使用方法
`antd-mobile-plus` 通过 `LocaleProvider` 组件实现多语言支持，使用 `value` 属性可以切换当前使用的语言。

```js 
// 引入中英文语言包
import { en_US, zh_CN } from '@alitajs/languages';
import { LocaleProvider, DemoComponent } from '@alitajs/antd-mobile-plus';

export default () => {
  const [lang, setLang] = React.useState(zh_CN);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          if (lang === zh_CN) {
            setLang(en_US);
          } else {
            setLang(zh_CN);
          }
        }}
      >
        点击切换
      </Button>
      <h3>当前: {lang.locale}</h3>
      <LocaleProvider value={lang}>
        <DemoComponent />
      </LocaleProvider>
    </>
  );
};

```

### 语言包
目前支持的语言:
| 语言 | 文件名 |
| ---- | ---- |
| 简体中文	|  zh_CN |
| 英语	|  en_US |

