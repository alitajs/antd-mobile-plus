export default {
  title: 'Antd Mobile Plus',
  mode: 'site',
  exportStatic: {},
  hash: true,
  locales: [['zh-CN', '中文']],
  favicon: 'https://alitajs.com/assets/img/meta/apple-touch-icon-114x114.png',
  logo: 'https://alitajs.com/assets/img/meta/apple-touch-icon-180x180.png',
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  outputPath: 'doc_dist',
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
}
