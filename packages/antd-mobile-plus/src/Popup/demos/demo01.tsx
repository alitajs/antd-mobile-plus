import React, { FC, useState, useRef, useEffect } from 'react';
// import { Popup } from '@alitajs/antd-mobile-plus';
import Popup from '../index';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [offset, setOffset] = useState(0);
  const awayRef1 = useRef(null);
  const awayRef2 = useRef<HTMLDivElement>(null);
  const awayRef = useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    if (awayRef2.current) {
      setOffset(awayRef2.current?.getBoundingClientRect().height);
    }
    return () => {};
  }, []);
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
          按钮下边缘向下弹出
        </div>
        <Popup
          awayRef={awayRef}
          show={show}
          type="relative"
          onClose={() => {
            setShow(false);
          }}
          closeOnClickOutside
          mode="dropdown"
        >
          <div
            onClick={() => {
              setShow(false);
            }}
            style={{ height: '50vh', backgroundColor: '#fff' }}
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
          }}
          onClick={() => {
            setShow2(true);
          }}
        >
          按钮上边缘向上弹出
        </div>

        <Popup
          closeOnClickOutside
          awayRef={awayRef2}
          show={show2}
          type="relative"
          onClose={() => {
            console.log('close2');
            setShow2(false);
          }}
          offset={-offset}
          mode="popup"
        >
          <div
            style={{
              height: '50vh',
              fontSize: '0.3rem',
              textAlign: 'center',
              lineHeight: '50vh',
              backgroundColor: '#fff',
            }}
          >
            我是内容区域
          </div>
        </Popup>
      </div>
      <div>
        <div
          style={{
            height: '4vh',
            textAlign: 'center',
            lineHeight: '4vh',
            backgroundColor: 'f5f5f5f',
          }}
        ></div>
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
          全屏向下弹出
        </div>

        <Popup
          closeOnClickOutside
          awayRef={awayRef1}
          show={show1}
          type="fullscreen"
          onClose={() => {
            setShow1(false);
          }}
          mode="dropdown"
        >
          <div
            style={{
              height: '50vh',
              fontSize: '0.3rem',
              textAlign: 'center',
              lineHeight: '50vh',
              backgroundColor: '#fff',
            }}
          >
            我是内容区域
          </div>
        </Popup>
      </div>
      <div>
        <div
          style={{
            height: '4vh',
            textAlign: 'center',
            lineHeight: '4vh',
            backgroundColor: 'f5f5f5f',
          }}
        ></div>
        <div
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
            position: 'relative',
          }}
          onClick={() => {
            setShow5(!show5);
          }}
        >
          全屏向上弹出
        </div>

        <Popup
          show={show5}
          type="fullscreen"
          onClose={() => {
            setShow5(false);
          }}
          mode="popup"
        >
          <div
            style={{
              height: '50vh',
              fontSize: '0.3rem',
              textAlign: 'center',
              lineHeight: '50vh',
              backgroundColor: '#fff',
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
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
            position: 'relative',
          }}
          onClick={() => {
            setShow3(true);
          }}
        >
          左侧弹出
        </div>

        <Popup
          closeOnClickOutside
          show={show3}
          type="fullscreen"
          onClose={() => {
            setShow3(false);
          }}
          mode="sliderLeft"
        >
          <div
            style={{
              height: '100vh',
              width: '70vw',
              fontSize: '0.3rem',
              textAlign: 'center',
              lineHeight: '50vh',
              backgroundColor: '#fff',
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
          style={{
            height: '0.8rem',
            backgroundColor: 'red',
            textAlign: 'center',
            lineHeight: '0.8rem',
            color: 'white',
            position: 'relative',
          }}
          onClick={() => {
            setShow4(true);
          }}
        >
          右侧弹出
        </div>

        <Popup
          closeOnClickOutside
          show={show4}
          type="fullscreen"
          onClose={() => {
            setShow4(false);
          }}
          mode="sliderRight"
        >
          <div
            style={{
              height: '100vh',
              width: '70vw',
              fontSize: '0.3rem',
              textAlign: 'center',
              lineHeight: '50vh',
              backgroundColor: '#fff',
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
