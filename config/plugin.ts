import { IApi } from 'dumi';
import IAssetsPackage from 'dumi-assets-types';

export default (api: IApi) => {
  if (!process.env.GENERATE_ASSRTS) return;

  api.register({
    key: 'dumi.modifyAssetsMeta',
    fn(pkg: IAssetsPackage) {
      // 处理 pkg 并返回新的 pkg
      pkg.assets.examples = pkg.assets.examples.map(item => ({ ...item, screenshot: `https://raw.githubusercontent.com/alitajs/antd-mobile-plus/master/screenshot/${item.identifier}.png?raw=true` }))
      return pkg;
    },
  });
};