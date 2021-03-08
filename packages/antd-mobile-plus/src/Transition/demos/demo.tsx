import React, { FC, useState } from 'react';
import { Transition } from '@alitajs/antd-mobile-plus';
import { Button } from 'antd-mobile';
interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('popup');
  return (
    <div>
      <Transition
        show={show}
        mode={mode}
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
      <div style={{ height: '0.2rem' }}></div>
      <Button
        type="primary"
        onClick={() => {
          setMode('popup');
          setTimeout(() => {
            setShow(!show);
          }, 20);
        }}
      >
        popUp
      </Button>
      <div style={{ height: '0.2rem' }}></div>
      <Button
        type="primary"
        onClick={() => {
          setMode('dropdown');
          setTimeout(() => {
            setShow(!show);
          }, 20);
        }}
      >
        dropdown
      </Button>
      <div style={{ height: '0.2rem' }}></div>
      <Button
        type="primary"
        onClick={() => {
          setMode('sliderLeft');
          setTimeout(() => {
            setShow(!show);
          }, 20);
        }}
      >
        sliderLeft
      </Button>
      <div style={{ height: '0.2rem' }}></div>
      <Button
        type="primary"
        onClick={() => {
          setMode('sliderRight');
          setTimeout(() => {
            setShow(!show);
          }, 20);
        }}
      >
        sliderRight
      </Button>
    </div>
  );
};

export default Demo;
