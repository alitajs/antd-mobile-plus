import React, { FC, useRef, useEffect, useState } from 'react';
import { ScrollToAnchor } from '@alitajs/antd-mobile-plus';
import NavBar from './NavBar';
import Section from './Section';
import './index.less';
import { data } from './data';

const { Nav, Container } = ScrollToAnchor;

interface DemoProps {}
const Demo: FC<DemoProps> = (props) => {
  const ref = useRef(null);
  const [aId, setAId] = useState('a01');
  return (
    <div>
      {' '}
      <ScrollToAnchor
        idPrefix="basic"
        data={data}
        className="scrollToAnchor"
        onScrollIndex={(index: number, item: any) => {
          setAId(item.id);
        }}
      >
        <Nav
          className="scrollToAnchor-nav"
          onRenderItem={(item: { label: React.ReactNode; id: string }) => {
            return <NavBar item={item} isActive={item.id === aId} />;
          }}
        />
        <Container
          className="scrollToAnchor-view"
          onRenderItem={(item: { label: React.ReactNode }) => {
            return <Section item={item} />;
          }}
        >
          <div
            style={{
              backgroundColor: '#f5f5f5',
              height: '1rem',
              lineHeight: '1rem',
              textAlign: 'center',
              color: '#666',
            }}
          >
            ~~~~ 我是有底线的 ~~~~
          </div>
        </Container>
      </ScrollToAnchor>
    </div>
  );
};

export default Demo;
