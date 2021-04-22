import React, { FC, useState } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { AccordionCard } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [isExtand, setIsExtand] = useState(true);
  const [isExtand1, setIsExtand1] = useState(false);

  const onChange = (e: boolean) => {
    setIsExtand(e);
  };
  const onChange1 = (e: boolean) => {
    setIsExtand1(e);
  };
  return (
    <div>
      <WhiteSpace size="lg" />
      <WingBlank size="md">
        <AccordionCard
          title="我是标题"
          extra="右侧扩展"
          isExtand={isExtand}
          onChange={onChange}
        >
          <div style={{ height: '5rem' }}></div>
        </AccordionCard>
      </WingBlank>
      <WhiteSpace size="lg" />

      <WingBlank size="md">
        <AccordionCard
          title="我是标题"
          extra="右侧扩展"
          isExtand={isExtand1}
          onChange={onChange1}
        >
          <div style={{ height: '5rem' }}></div>
        </AccordionCard>
      </WingBlank>
    </div>
  );
};

export default Demo;
