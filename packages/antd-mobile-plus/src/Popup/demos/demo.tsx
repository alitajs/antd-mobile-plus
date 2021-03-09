import React, { FC, useState, useRef, useEffect } from 'react';
import { Popup } from '@alitajs/antd-mobile-plus';

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
            setShow(!show);
          }}
        >
          打开动画
        </div>
        <Popup
          // popMode=""
          awayRef={awayRef}
          show={show}
          onClose={() => {
            setShow(false);
          }}
          scrollElement={ref.current}
          direction="down"
        >
          <div
            onClick={() => {
              setShow(false);
            }}
            style={{ height: '50vh', textAlign: 'center', lineHeight: '50vh' }}
          >
            弹出内容区域(滚动页面，再点击试试？)
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Demo;
