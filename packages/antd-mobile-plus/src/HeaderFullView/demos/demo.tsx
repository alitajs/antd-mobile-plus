import React, { FC } from 'react';
import { HeaderFullView } from '@alitajs/antd-mobile-plus';
import IconName from './assets/icon-name.png';
import IconName1 from './assets/icon-name1.png';
import IconName2 from './assets/icon-name2.png';
import IconName3 from './assets/icon-name3.png';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <>
      <div style={{ margin: '0.2rem' }}>
        <HeaderFullView
          title="浩鲸集团有限股份有限公司"
          src=""
          infos={[
            {
              id: '01',
              label: '四川遂宁市船山区凯旋下路162号',
            },
            {
              id: '02',
              label: '柏伟(先生) · 13508218316',
            },
          ]}
          tools={[
            {
              id: '01',
              text: '在途工单',
              icon: IconName,
              onClick: () => {},
            },
            {
              id: '02',
              text: '个人全视图',
              icon: IconName1,
              onClick: () => {},
            },
            {
              id: '03',
              text: '联系客户',
              icon: IconName2,
              onClick: () => {},
            },
            {
              id: '04',
              text: '去这里',
              icon: IconName3,
              onClick: () => {},
            },
          ]}
        />
      </div>
      <div style={{ margin: '0.2rem' }}>
        <HeaderFullView
          title="浩鲸集团有限股份有限公司"
          src=""
          infos={[
            {
              id: '01',
              label: '四川遂宁市船山区凯旋下路162号',
            },
            {
              id: '02',
              label: '柏伟(先生) · 13508218316',
            },
          ]}
          extra={
            <div
              style={{
                padding: '0.15rem 0.2rem',
                backgroundColor: 'rgba(0, 137, 255, 0.3)',
                color: '#0089FF',
              }}
            >
              编码：28003544795
            </div>
          }
          tools={[
            {
              id: '01',
              text: '在途工单',
              icon: IconName,
              onClick: () => {},
            },
            {
              id: '02',
              text: '个人全视图',
              icon: IconName1,
              onClick: () => {},
            },
            {
              id: '03',
              text: '联系客户',
              icon: IconName2,
              onClick: () => {},
            },
            {
              id: '04',
              text: '去这里',
              icon: IconName3,
              onClick: () => {},
            },
          ]}
        />
      </div>
    </>
  );
};

export default Demo;
