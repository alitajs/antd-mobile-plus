import React, { FC, useState, useRef, useEffect, useMemo } from 'react';
import { Popup } from '@alitajs/antd-mobile-plus';
import { Icon } from 'antd-mobile';
import { popupList } from './data';
import './index.less';

const prefixCls = 'popup-page';

interface DemoProps {}

const PopupItem = ({ title = '', mode, custom, ...restProps }) => {
  const [show, setShow] = useState(false);

  const width = useMemo(() => {
    switch (mode) {
      case 'alert':
      case 'sliderLeft':
      case 'sliderRight':
        return '50vw';
    }
    return 'auto';
  }, [mode]);

  const height = useMemo(() => {
    switch (mode) {
      case 'alert':
      case 'popup':
      case 'dropdown':
        return '30vh';
    }
    return '100vh';
  }, [mode]);

  return (
    <>
      <div className={`${prefixCls}-cell`} onClick={() => setShow(true)}>
        <div>{title}</div>
        <Icon type="right" color="#969799" />
      </div>
      <Popup
        show={show}
        onClose={() => {
          setShow(false);
        }}
        mode={mode}
        {...restProps}
      >
        {custom ? (
          restProps.children
        ) : (
          <div
            style={{
              width,
              height,
            }}
          ></div>
        )}
      </Popup>
    </>
  );
};

const GroupView = ({ popups = [], title = '' }) => {
  return (
    <div className={`${prefixCls}-group`}>
      <div className={`${prefixCls}-group-title`}>{title}</div>
      <div className={`${prefixCls}-list-view`}>
        {popups.map((item) => (
          <PopupItem {...item} />
        ))}
      </div>
    </div>
  );
};

const Demo: FC<DemoProps> = (props) => {
  return (
    <div className="popup-page">
      {popupList.map((item: any) => (
        <GroupView {...item} />
      ))}
    </div>
  );
};

export default Demo;
