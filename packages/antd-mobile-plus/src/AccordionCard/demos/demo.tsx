import React, { FC, useState } from 'react';
import { AccordionCard } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [isExtand, setIsExtand] = useState(false);
  const onChange = (e: boolean) => {
    setIsExtand(e);
  };
  return (
    <AccordionCard isExtand={isExtand} onChange={onChange}>
      <div style={{ height: '5rem' }}></div>
    </AccordionCard>
  );
};

export default Demo;
