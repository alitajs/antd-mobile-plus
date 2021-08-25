import React from 'react';
export const popupList = [
  {
    title: '基础用法',
    popups: [
      {
        title: '展示弹出层',
        mode: 'alert',
      },
    ],
  },
  {
    title: '弹出位置',
    popups: [
      {
        title: '顶部弹出',
        mode: 'dropdown',
      },
      {
        title: '底部弹出',
        mode: 'popup',
      },
      {
        title: '左侧弹出',
        mode: 'sliderLeft',
      },
      {
        title: '右侧弹出',
        mode: 'sliderRight',
      },
    ],
  },
  {
    title: '关闭按钮',
    popups: [
      {
        title: '顶部弹出',
        mode: 'dropdown',
        closeable: true,
        closeOnClickOverlay: false,
      },
      {
        title: '底部弹出',
        mode: 'popup',
        closeable: true,
        closeOnClickOverlay: false,
      },
      {
        title: '左侧弹出',
        mode: 'sliderLeft',
        closeable: true,
        closeOnClickOverlay: false,
      },
      {
        title: '右侧弹出',
        mode: 'sliderRight',
        closeable: true,
        closeOnClickOverlay: false,
      },
      {
        title: '展示弹出层',
        mode: 'alert',
        closeable: true,
        closeOnClickOverlay: false,
      },
    ],
  },
  {
    title: '圆角弹窗',
    popups: [
      {
        title: '顶部弹出',
        mode: 'dropdown',
        round: true,
      },
      {
        title: '底部弹出',
        mode: 'popup',
        round: true,
      },
      {
        title: '左侧弹出',
        mode: 'sliderLeft',
        closeable: true,
        round: true,
      },
      {
        title: '右侧弹出',
        mode: 'sliderRight',
        round: true,
      },
      {
        title: '展示弹出层',
        mode: 'alert',
        closeable: true,
        round: true,
      },
    ],
  },
  {
    title: '自定义弹窗',
    popups: [
      {
        title: '展示弹出层',
        mode: 'alert',
        custom: true,
        children: (
          <div
            style={{
              width: '70vw',
              height: '50vw',
              backgroundColor: '#1989fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            我是自定义内容
          </div>
        ),
      },
    ],
  },
];
