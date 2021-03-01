const fs = require('fs');
const path = require('path');

// 扫描路径
const SCAN_PATH = path.join(__dirname, '../packages/antd-mobile/src');
// 生成路径
const WRITE_PATH = path.join(__dirname, '../packages/antd-mobile/src/index.tsx');
// antd-mobile
const ANTD_PATH = path.join(__dirname, '../node_modules/antd-mobile/lib')
// 过滤文件
const filterFileFolder = ['.umi', 'utils', '_util', 'style'];

// 工具类导出
const utilsFileFolder = ['utils'];

// 首字母大写
const upperCase = str => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, m => m.toUpperCase());
};

// 首字母小写
const lowerCase = str => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, m => m.toLowerCase());
};

// '-' 改成首字母大写的驼峰
const t = str => {
  const arr = str.split('-');
  return arr.map(s => upperCase(s)).join('');
}

try {
  // 生成的文件名，首字母小写
  const files = fs.readdirSync(SCAN_PATH);
  const useableFiles = [];
  const utilsFiles = [];
  files.forEach(item => {
    const stat = fs.statSync(`${SCAN_PATH}/${item}`);
    if (stat.isDirectory() && !filterFileFolder.includes(item)) {
      useableFiles.push(upperCase(item));
    }
    if (stat.isDirectory() && utilsFileFolder.includes(item)) {
      utilsFiles.push(item);
    }
  });
  const antdAllFiles = [];

  const antdFiles = fs.readdirSync(ANTD_PATH);
  antdFiles.forEach(item => {
    const stat = fs.statSync(`${ANTD_PATH}/${item}`);
    const name = t(item);
    if (stat.isDirectory() && !filterFileFolder.includes(item) && !useableFiles.includes(name)) {
      antdAllFiles.push(name);
    }
  });
  let fileString =
    '// 此文件在构建时会自动更新，请勿手动修改，详见 package.json 中的 entry script\n';
  useableFiles.forEach(item => {
    fileString += `export { default as ${upperCase(
      item,
    )} } from './${upperCase(item)}';\n`;
  });
  utilsFiles.forEach(item => {
    fileString += `export * from './${item}';\n`;
  });
  // 导出未封装的 antd-mobile 组件
  fileString += `export { ${antdAllFiles.join(', ')} } from 'antd-mobile';`;

  fs.writeFileSync(WRITE_PATH, fileString);
  // eslint-disable-next-line no-console
  console.log('入口文件 packages/antd-mobile/src/index.tsx 生成完成');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
