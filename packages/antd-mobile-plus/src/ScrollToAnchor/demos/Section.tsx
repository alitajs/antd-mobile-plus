import React, { FC } from 'react';
import './index.less';

interface SectionProps {
  item: any;
}

const Section: FC<SectionProps> = ({ item }) => {
  return (
    <div
      style={{
        height: '60vh',
        marginTop: '0.2rem',
        backgroundColor: '#fff',
        padding: '0.2rem',
      }}
    >
      {item.label}
    </div>
  );
};

export default Section;
