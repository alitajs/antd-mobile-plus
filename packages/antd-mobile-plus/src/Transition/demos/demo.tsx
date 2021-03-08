import React, { FC, useState } from 'react';
import { Transition } from '@alitajs/antd-mobile-plus';
import { Button } from 'antd-mobile';
interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        style={{
          position: 'fixed',
          bottom: '0',
          left: 0,
          right: 0,
        }}
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show ? '打开' : '关闭'}
      </Button>
      <Transition
        show={show}
        mode="sliderLeft"
        duration={[0.3, 0.2]}
        delay={0}
        onStartAnimation={() => {
          console.log('onStartAnimation');
        }}
        onEndAnimation={() => {
          console.log('onEndAnimation');
        }}
        onWillOpen={() => {
          console.log('onWillOpen');
        }}
        onOpened={() => {
          console.log('onOpened');
        }}
        onWillClose={() => {
          console.log('onWillClose');
        }}
        onClosed={() => {
          console.log('onClosed');
        }}
      >
        <div
          style={{ height: '100vh', lineHeight: '100vh', textAlign: 'center' }}
          onClick={() => {
            setShow(false);
          }}
        >
          点击关闭
        </div>
      </Transition>
    </div>
  );
};

export default Demo;
