import React, { FC, useState, useRef, useEffect } from 'react';
// import { Popup } from '@alitajs/antd-mobile-plus';
import Popup from '../index';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [show, setShow] = useState(false);
  const awayRef = useRef(null);
  const ref = useRef(null);
  return (
    <div style={{ height: '100vh', overflow: 'auto' }} ref={ref}>
      <div style={{ height: '30vh' }}></div>
      <div style={{ height: '150vh' }}>
        <div
          ref={awayRef}
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
            position: 'relative',
          }}
          onClick={() => {
            console.log('show');
            setShow(true);
          }}
        >
          打开动画
        </div>
        <Popup
          mode="alert"
          onClose={() => {
            console.log(false);
            setShow(false);
          }}
          show={show}
          closeOnClickOverlay={false}
        >
          <div
            style={{ height: '50vw', width: '70vw', backgroundColor: '#fff' }}
          ></div>
        </Popup>
      </div>
    </div>
  );
};

export default Demo;
