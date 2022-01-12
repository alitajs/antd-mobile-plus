import React, { FC, useState } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { AccordionCard } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [isExtand, setIsExtand] = useState(true);
  const [isExtand1, setIsExtand1] = useState(false);
  const [isExtand2, setIsExtand2] = useState(true);
  const [isExtand3, setIsExtand3] = useState(false);

  const onChange = (e: boolean) => {
    setIsExtand(e);
  };
  const onChange1 = (e: boolean) => {
    setIsExtand1(e);
  };
  const onChange2 = (e: boolean) => {
    setIsExtand2(e);
  };
  const onChange3 = (e: boolean) => {
    setIsExtand3(e);
  };
  return (
    <div>
      <WhiteSpace size="lg" />
      <WingBlank size="md">
        <AccordionCard
          title="我是长标题啊阿啊阿啊阿啊阿啊阿啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
          extra="右侧扩展"
          extandPostion="bottom"
          isExtand={isExtand}
          onChange={onChange}
        >
          <div style={{ height: '2rem' }}></div>
        </AccordionCard>
      </WingBlank>
      <WhiteSpace size="lg" />

      <WingBlank size="md">
        <AccordionCard
          title="我是标题"
          extra="右侧扩展"
          extandPostion="bottom"
          isExtand={isExtand1}
          onChange={onChange1}
        >
          <div style={{ height: '5rem' }}></div>
        </AccordionCard>
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="md">
        <AccordionCard
          title="我是长标题啊阿啊阿啊阿啊阿啊阿啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
          extra="右侧扩展"
          isExtand={isExtand2}
          onChange={onChange2}
        >
          <div style={{ height: '2rem' }}></div>
        </AccordionCard>
      </WingBlank>
      <WhiteSpace size="lg" />

      <WingBlank size="md">
        <AccordionCard
          title="我是标题"
          extra="右侧扩展"
          isExtand={isExtand3}
          onChange={onChange3}
        >
          <div style={{ height: '5rem' }}></div>
        </AccordionCard>
      </WingBlank>

      <WhiteSpace size="lg" />

      <WingBlank size="md">
        <AccordionCard title="不折叠卡片" extra="右侧扩展" extandPostion="none">
          <div style={{ height: '5rem' }}></div>
        </AccordionCard>
      </WingBlank>
      <WhiteSpace size="lg" />
    </div>
  );
};

export default Demo;
