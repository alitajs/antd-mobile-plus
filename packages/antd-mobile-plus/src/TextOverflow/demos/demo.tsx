import React, { FC } from 'react';
import { TextOverflow } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <TextOverflow text="新华字典提供常用字,现代汉语常用字表,2500常用字,常用汉字,常用字大全,常用汉字大全,2500常用汉字,2500常用字大全,2500常用汉字大全,《现代汉语常用字表》由国家." wrapper="div" length={10} />
      <TextOverflow text="汉字是语文的基础,语文迷汉字大全(在线新华字典)收录上万个汉字,致力于让语文爱好者更便捷地在线查字,提升语文基本功" wrapper="span" length={10} />
    </div>
  );
};

export default Demo;
