/*
 * @Description: 
 * @Autor: fish-qifutao
 * @Date: 2021-03-25 14:49:08
 */
import React, { FC, useState, useEffect, useCallback } from 'react';
import { Loading } from '@alitajs/antd-mobile-plus';
import { Button } from 'antd-mobile';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [icon, setIcon] = useState<boolean | undefined>(false);
  const [type, setType] = useState<string>('black');
  const [visible, setVisible] = useState<boolean>(false);

  let timerID: number; 
  let time = 3;
  const openMask = ({ icon, type}: { icon?: boolean, type?: string}) => {
    setVisible(true);
    timerID = window.setInterval(() => timer(), 1000);

    setIcon(icon);

    if(type !== undefined) {
      setType(type);
    }
  };

  const timer = () => {
    if (time === 0) {
      setVisible(false);
      clearInterval(timerID);
    } else {
      time = time - 1;
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerID);
    }
  }, []);

  return (
    <div>
      {
        icon ? <Loading spinning={visible} /> : <Loading spinning={visible} type={type} />
      }
        白色遮罩
      <Button onClick={() => openMask({ type: "white" })} style={{ marginRight: 8 }}>
        loading
        </Button>
      <br />
        黑色遮罩
      <Button onClick={() => openMask({ type: "black" })} style={{ marginRight: 8 }}>
        loading
        </Button>
      <br />
        默认带有图标，也可以自定义
      <Button onClick={() => openMask({ icon: true })} style={{ marginRight: 8 }}>
        loading
        </Button>
    </div>
  );
};

export default Demo;
