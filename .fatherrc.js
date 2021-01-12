export default {
  esm: { type: 'babel' },
  cjs: { type: 'babel' },
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  pkgs: [
    'theme',
    'tracker',
    'antd-mobile-plus',
  ],
}
