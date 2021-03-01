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
| .canvas.drawing.toDataURL() | 获取签名图片 |object |
| clear() |清除画布 | void |
| getSaveData() | 返回所画的图形的canvas编码 | |
| loadSaveData(saveData: String, immediate: Boolean)| 加载savaData对应的图形 | void|
| undo()| 撤销上一次操作 | void |
