const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
// 生成路径
const WRITE_PATH = path.join(__dirname, './.umi');
// antd-mobile
const ANTD_PATH = path.join(__dirname, '../node_modules/antd-mobile/lib')
// 过滤文件
const filterFileFolder = ['.umi', 'utils', '_util', 'style']

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
  const antdAllFiles = [];

  const antdFiles = fs.readdirSync(ANTD_PATH);
  antdFiles.forEach(item => {
    const stat = fs.statSync(`${ANTD_PATH}/${item}`);
    const name = t(item);
    if (stat.isDirectory() && !filterFileFolder.includes(item)) {
      antdAllFiles.push(name);
    }
  });
  antdAllFiles.forEach(item => {
    mkdirp.sync(path.dirname(path.join(WRITE_PATH, 'mobileComponents', `${item}/index.js`)));
    fs.writeFileSync(path.join(WRITE_PATH, 'mobileComponents', `${item}/index.js`), `import c from './${item}';

export default c;
    `);
    fs.writeFileSync(path.join(WRITE_PATH, 'mobileComponents', `${item}/${item}.js`), `import React, { useMemo } from 'react';
import ${item} from 'antd-mobile/lib/${lowerCase(item)}';
import 'antd-mobile/lib/${lowerCase(item)}/style/index';

const My${item} = (props) => {
  const { name, ...restProps } = props;

  return <${item} {...restProps}>{name}</${item}>;
};

export default My${item};
`);
  })
  console.log('mobileComponents 组件文件 生成完成');

  let fileString =
    `// 此文件由脚本自动更新，请勿手动修改\n/**\n* @description: 移动端基础控件目录\n*/\n
import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';

const MyLoadable = compName => Loadable({
  loading: () => <Spin />,
  // eslint-disable-next-line prefer-template
  loader: () => import('./' + compName),
});

const components = {\n`;
  antdAllFiles.forEach(item => {
    fileString += `  ${item}: MyLoadable('${item}'),\n`;
  });
  fileString += `};

export default components;`
  fs.writeFileSync(path.join(WRITE_PATH, 'mobileComponents', `index.js`), fileString);

  // eslint-disable-next-line no-console
  console.log('mobileComponents 入口文件 生成完成');

  antdAllFiles.forEach(item => {
    mkdirp.sync(path.dirname(path.join(WRITE_PATH, 'mobileComp', `${lowerCase(item)}.js`)));
    fs.writeFileSync(path.join(WRITE_PATH, 'mobileComp', `${lowerCase(item)}.js`), `import createId from '$editor/utils/createId';
import { getDefaultConfigs } from '../compList';

const ${item} = ({
    props = {},
    ...restConfigs
    }) => ({
    ...getDefaultConfigs(1, '错误标题，请修改', '${item}', {
        // 这里加默认属性
        ...props,
    }, 'antd-mobile'),
    ...restConfigs,
    // 这里加组件导出的所有属性
    todoProps: [
    ],
    todoEvents: [],
    todoStyles: [
        'textAlign', 'padding', 'margin', 'width', 'height', 'backgroundColor', 'borderColor', 'color', 'customStyle',
    ],
    setEvents: [],
});

export default ${item};
`);
  })
  console.log('mobileComp 配置文件 生成完成');


  let fileString2 = '';
  antdAllFiles.forEach(item => {
    fileString2 += `import ${item} from './mobileComp/${lowerCase(item)}';\n`;
  });
  fileString2 += `
const componentList = [{
  id: 6,
  title: '布局',
  children: [
  ],
},
{
  id: 0,
  title: '容器',
  children: [{
    label: '空白容器',
    compName: 'View',
  },
  {
    label: '卡片',
    compName: 'Card',
  },
  ],
},
{
  id: 1,
  title: '通用',
  children: [
    {
      label: '按钮',
      compName: 'Button',
    },
    {
      label: '图标',
      compName: 'Icon',
    },
    {
      label: '滑动输入条',
      compName: 'Slider',
    },
    {
      label: '搜索栏',
      compName: 'SearchBar',
    },
    {
      label: '标签',
      compName: 'Tag',
    },
  ],
}, {
  id: 2,
  title: '数据录入',
  children: [
    {
      label: '动态表单',
      compName: 'DynamicForm',
    },
  ],
}, {
  id: 3,
  title: '数据展示',
  children: [
    {
      label: '结果页',
      compName: 'Result',
    },
  ],
},
{
  id: 4,
  title: '反馈',
  children: [
  ],
},
{
  id: 5,
  title: '导航',
  children: [
  ],
},
];

export default componentList;

export const compCreators = {\n`;
  antdAllFiles.forEach(item => {
    fileString2 += `  ${item},\n`;
  });
  fileString2 += '};';
  fs.writeFileSync(path.join(WRITE_PATH, 'mobileComp', `mobileCompList.js`), fileString2);

} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
