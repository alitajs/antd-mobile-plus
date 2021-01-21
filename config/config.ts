export default {
  title: 'Antd Mobile Plus',
  mode: 'site',
  exportStatic: {},
  hash: true,
  locales: [['zh-CN', '中文'], ['en-US', '英文']],
  favicon: 'https://alitajs.com/assets/img/meta/apple-touch-icon-114x114.png',
  logo: 'https://user-images.githubusercontent.com/11746742/104428726-c2c90300-55bf-11eb-9b84-d52a86050b9a.png',
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  outputPath: 'doc_dist',
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
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
    .am-icon {
      fill: currentColor;
      background-size: cover;
      width: 22px;
      height: 22px;
    }
    `,
  ],
}
