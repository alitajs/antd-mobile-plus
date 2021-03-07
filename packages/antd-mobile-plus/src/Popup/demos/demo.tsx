import React, { FC, useState, useRef, useEffect } from 'react';
import { Popup } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [show, setShow] = useState(false);
  const awayRef = useRef(null);
  const ref = useRef(null);
  return (
    <div style={{ height: '100vh', overflow: 'auto' }} ref={ref}>
      <div style={{ height: '150vh' }}>
        <div style={{ height: '50vh' }}>asdjflaksjd;fakjs;dkfja;sdj</div>
        <div
          ref={awayRef}
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
            position: 'relative',
            zIndex: 1000,
          }}
          onClick={() => {
            setShow(!show);
          }}
        >
          展示|隐藏
        </div>
        <Popup
          awayRef={awayRef}
          show={show}
          onClose={() => {
            setShow(false);
          }}
          scrollElement={ref.current}
          direction="up"
        >
          <div
            onClick={() => {
              setShow(false);
            }}
            style={{ height: '50vh' }}
          >
            asdjflaksjd;fakjs;dkfja;sdj
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Demo;
