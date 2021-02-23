/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-23 16:06:03
 */
const fs = require('fs');
const path = require('path');

class TemplateEngine {
  constructor(componentsName) {
    this.componentsPath = path.join(
      __dirname,
      '../antd-mobile-plus-template/index',
    );
    this.demoPath = path.join(__dirname, '../antd-mobile-plus-template/demos');
    this.targetPath = path.join(__dirname, '../packages/antd-mobile-plus/src');
    this.componentsName = componentsName;
  }

  transformString(componentName) {
    componentName = componentName.replace(
      componentName[0],
      componentName[0].toLowerCase(),
    );
    return componentName.replace(/[A-Z]/g, function (match) {
      return '-' + match.toLowerCase();
    });
  }

  modifyLess(filePath, fileName) {
    let lessText = fs.readFileSync(filePath).toString();
    const targetText = `
@prefixCls:alita-${this.transformString(this.componentsName)};

.@{prefixCls}{
    
}
      `;
    lessText = lessText.replace('@__prefixcls__;', targetText);
    fs.writeFileSync(path.join(this.targetPath, fileName), lessText);
  }

  modifyTsx(filePath, fileName) {
    let lessText = fs.readFileSync(filePath).toString();
    let targetText = `import { ${this.componentsName}Type } from './PropsType';
    
const prefixCls = 'alita-${this.transformString(this.componentsName)}';`;
    lessText = lessText.replace(/Y__Template__;/g, targetText);
    lessText = lessText.replace(/_ComponentsName_/g, this.componentsName);
    lessText = lessText.replace(/__Props__/g, `${this.componentsName}Type`);
    fs.writeFileSync(path.join(this.targetPath, fileName), lessText);
  }

  modifyMD(filePath, fileName) {
    let mdText = fs.readFileSync(filePath).toString();
    fs.writeFileSync(path.join(this.targetPath, fileName), mdText);
  }

  modifyPropsType(filePath, fileName) {
    let propsTs = fs.readFileSync(filePath).toString();
    propsTs += `
export interface ${this.componentsName}Type {

}`;
    fs.writeFileSync(path.join(this.targetPath, fileName), propsTs);
  }

  createComponents() {
    const fileList = fs.readdirSync(this.componentsPath);
    fileList.forEach((filePath) => {
      const file = path.join(this.componentsPath, filePath);
      if (file.indexOf('index.less') !== -1) {
        this.modifyLess(file, filePath);
      } else if (file.indexOf('index.tsx') !== -1) {
        this.modifyTsx(file, filePath);
      } else if (file.indexOf('index.md') !== -1) {
        this.modifyMD(file, filePath);
      } else if (file.indexOf('PropsType.ts') !== -1) {
        this.modifyPropsType(file, filePath);
      }
    });
  }

  createDemos() {
    const fileList = fs.readdirSync(this.demoPath);
    const demosDir = path.join(this.targetPath, './demos');
    fs.mkdirSync(demosDir);
    fileList.forEach((fileName) => {
      const fromFile = path.join(this.demoPath, fileName);
      const toFile = path.join(demosDir, fileName);
      let text = fs.readFileSync(fromFile).toString();
      text = text.replace(/__components__/g, this.componentsName);
      fs.writeFileSync(toFile, text);
    });
  }
  createDir() {
    this.targetPath = path.join(this.targetPath, this.componentsName);
    if (fs.existsSync(this.targetPath)) {
      console.error('该组件已存在！请勿重复创建');
      return;
    }
    fs.mkdirSync(this.targetPath);
  }

  addComponentNameToIndex() {
    const addText = `export { default as ${this.componentsName} } from './${this.componentsName}';`;
    const targetFilePath = path.join(
      __dirname,
      '../packages/antd-mobile-plus/src/index.tsx',
    );
    let indexTxt = fs.readFileSync(targetFilePath).toString();
    indexTxt += addText;
    fs.writeFileSync(targetFilePath, indexTxt);
  }

  generateComponent() {
    this.createDir();
    this.createComponents();
    this.createDemos();
    this.addComponentNameToIndex();
    console.log(`${this.componentsName}：组件添加完成`);
  }
}

const main = () => {
  const args = process.argv;
  if (args.length <= 2) {
    console.error('请输入组件名称');
    return;
  }
  const componentsName = args[2];

  const engine = new TemplateEngine(componentsName);
  engine.generateComponent();
};

main();
