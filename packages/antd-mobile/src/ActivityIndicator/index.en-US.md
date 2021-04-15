---
title: ActivityIndicator 活动指示器
group:
  title: Feedback
  path: /feedback
  order: 4
nav:
  title: antd-mobile
  path: /antd
---

`ActivityIndicator` indicates that a task is currently in progress.

### Rules
- Don't stop activity indicator if the task is not completed.
- By providing meaningful texts under certain circumstances can help user understand which task is in progress. eg: uploading photos.
- If you know the user's waiting time, you can use `Progress` instead.

<code src="./demos/basic.tsx" />

<API/>