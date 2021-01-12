const componentMenus = [
  {
    title: 'Demo',
    'title.zh-CN': '演示',
    children: [
      'DemoComponent',
    ],
  }
]

function getComponentMenus(locale: string) {
  return componentMenus.map(item => ({
    title: item[locale === 'zh-CN' ? 'title.zh-CN' : 'title'],
    children: item.children,
  }))
}

export default {
  title: 'Antd Mobile Plus',
  mode: 'site',
  exportStatic: {},
  hash: true,
  favicon:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  logo:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  menus: {
    '/components': getComponentMenus('en-US'),
    '/zh-CN/components': getComponentMenus('zh-CN'),
  },
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  outputPath: 'doc_dist',
  styles: [
    `.__dumi-default-mobile-demo-layout {
      min-height: 100vh;
      background: #f5f5f5;
      padding: 0 !important;
      overflow: hidden;
      font-size: 0.26rem;
    }
    .__dumi-default-device-status {
      border-bottom: 1px solid #e3e3e3;
    }
    .__dumi-default-mobile-previewer {
      font-size: initial;
    }
    `,
  ],
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
}
