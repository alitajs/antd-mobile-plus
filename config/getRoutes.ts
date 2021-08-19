import { IApi } from 'dumi';
import fs from 'fs';
import path from 'path';

function escapeRegExp(str: string) {
  return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export default (api: IApi) => {
  api.register({
    key: 'dumi.getRootRoute',
    fn(result: any) {
      // 去掉无用的路径前缀
      const content = replaceAll(
        JSON.stringify(result),
        path.join(__dirname, '../'),
        '',
      );
      fs.writeFileSync(path.join(__dirname, '../routes.json'), content);
    },
  });
};
