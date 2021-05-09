import React, { FC, useRef, useEffect, useState } from 'react';
import NavBar from './NavBar';
import Section from './Section';
import { ScrollToAnchor } from '@alitajs/antd-mobile-plus';
import { data } from './data';
import './index.less';

const { Nav, Container } = ScrollToAnchor;

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [aId, setAId] = useState('a01');
  const [scrollEle, setScrollEle] = useState<Element | null>(null);
  useEffect(() => {
    const ele = document.querySelector('.vertical-view');
    if (ele) {
      setScrollEle(ele);
    }
  }, []);
  return (
    <div>
      <ScrollToAnchor
        idPrefix="vertical"
        data={data}
        className="vertical"
        scrollElement={scrollEle}
        // offset={-138}
        onScrollIndex={(index: number, item: any) => {
          setAId(item.id);
        }}
      >
        <Nav
          className="vertical-nav"
          onRenderItem={(item: any) => {
            return <NavBar item={item} isActive={item.id === aId} />;
          }}
        />
        <Container
          className="vertical-view"
          onRenderItem={(item: any) => {
            return <Section item={item} />;
          }}
        />
      </ScrollToAnchor>
    </div>
  );
};

export default Demo;
