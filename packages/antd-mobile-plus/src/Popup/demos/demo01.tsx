import React, { FC, useState, useRef, useEffect } from 'react';
import { Popup } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const awayRef1 = useRef(null);
  const awayRef2 = useRef(null);
  const awayRef = useRef(null);
  const ref = useRef(null);
  return (
    <div style={{ height: 'auto' }} ref={ref}>
      <div
        style={{
          height: '4vh',
          textAlign: 'center',
          backgroundColor: 'f5f5f5f',
        }}
      ></div>
      <div>
        <div
          ref={awayRef}
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
          }}
          onClick={() => {
            setShow(true);
          }}
        >
          向下弹出
        </div>
        <Popup
          awayRef={awayRef}
          show={show}
          onClose={() => {
            setShow(false);
          }}
          direction="down"
        >
          <div
            onClick={() => {
              setShow(false);
            }}
            style={{ height: '50vh' }}
          >
            我是内容区域
          </div>
        </Popup>
      </div>
      <div
        style={{
          height: '4vh',
          textAlign: 'center',
          lineHeight: '4vh',
          backgroundColor: 'f5f5f5f',
        }}
      ></div>

      <div>
        <div
          ref={awayRef1}
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
            position: 'relative',
          }}
          onClick={() => {
            setShow1(!show1);
          }}
        >
          向下弹出
        </div>

        <Popup
          awayRef={awayRef1}
          show={show1}
          onClose={() => {
            setShow1(false);
          }}
          direction="down"
        >
          <div
            style={{
              height: '50vh',
              fontSize: '0.3rem',
              textAlign: 'center',
              lineHeight: '50vh',
            }}
          >
            我是内容区域
          </div>
        </Popup>
      </div>
      <div
        style={{
          height: '4vh',
          textAlign: 'center',
          lineHeight: '4vh',
          backgroundColor: 'f5f5f5f',
        }}
      ></div>
      <div>
        <div
          ref={awayRef2}
          id="up"
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
            position: 'relative',
            zIndex,
          }}
          onClick={() => {
            setShow2(true);
          }}
        >
          向上弹出
        </div>

        <Popup
          awayRef={awayRef2}
          show={show2}
          onClose={() => {
            setShow2(false);
          }}
          direction="up"
          offset={document.querySelector('#up')?.getBoundingClientRect().height}
          onClosed={() => {
            setZIndex(0);
          }}
          onWillOpen={() => {
            setZIndex(1000);
          }}
        >
          <div
            style={{
              height: '50vh',
              fontSize: '0.3rem',
              textAlign: 'center',
              lineHeight: '50vh',
            }}
          >
            我是内容区域
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Demo;
