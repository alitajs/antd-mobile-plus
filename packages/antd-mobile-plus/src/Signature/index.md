---
title: 手写签名
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demos/demo.tsx" />

### 参数

<API />

### signRef 可以使用的方法
| 方法名 | 说明 | 返回类型 |
| --- | --- | --- |
| isEmpty() |  | boolean| |
| clear() |使用backgroundColor道具清除画布 | void |
| fromDataURL(base64String, options) | 将base64图像写入画布 | void|
| fromData(pointGroupArray) | 从一组点组中绘制签名图像 | void|
| toData() | 将签名图像作为点组数组返回 | pointGroupArray|
| off() | 取消绑定所有事件处理程序 | void|
| on() | 重新绑定所有事件处理程序 | void |
| getCanvas() | 返回基础画布引用。允许您根据需要修改画布或调用诸如toDataURL() | canvas |
| getTrimmedCanvas() | 创建画布的副本并返回其修剪版本，并删除所有空白 | canvas |
| getSignaturePad() | 返回基础SignaturePad引用 | SignaturePad |
| toDataURL() | 返回图片的Base64字符 | base64string |
