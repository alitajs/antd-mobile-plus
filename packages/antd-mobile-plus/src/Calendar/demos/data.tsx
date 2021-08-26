import React from 'react';
import { getToday } from '../utils';
export const popupList = [
  {
    title: '基础用法',
    popups: [
      {
        title: '选择单个日期',
        type: 'single',
      },
      {
        title: '选择多个日期',
        type: 'multiple',
      },
      {
        title: '选择日期范围',
        type: 'range',
      },
    ],
  },
  {
    title: '自定义日历',
    popups: [
      {
        title: '自定义颜色',
        type: 'range',
        color: '#f40',
      },
      {
        title: '自定义日期范围',
        minDate: new Date(),
        maxDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate(),
        ),
      },
      {
        title: '自定义按钮文字',
        confirmText: '底部自定义按钮文字',
      },
      {
        title: '自定义日期文案',
      },
      {
        title: '自定义弹出位置',
        mode: 'sliderRight',
      },
      {
        title: '日期区间最大范围',
        type: 'range',
      },
      {
        title: '自定义周起始日',
        firstDayOfWeek: '1',
      },
    ],
  },
  {
    title: '平铺展示',
    popups: [],
  },
];
