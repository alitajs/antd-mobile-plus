import React, { FC } from 'react';
import { Menu, ActivityIndicator, NavBar } from '@alitajs/antd-mobile';
import { useSetState } from 'ahooks';
import { data } from './data';
import './basic.less';

interface MenuExmpleProps {}

const MenuExmple: FC<MenuExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    initData: null,
    show: false,
  });
  const onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  };
  const handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    setState({
      show: !state.show,
    });
    // mock for async data loading
    if (!state.initData) {
      setTimeout(() => {
        setState({
          initData: data,
        });
      }, 500);
    }
  };

  const onMaskClick = () => {
    setState({
      show: false,
    });
  };

  const { initData, show } = state;
  const menuEl = (
    <Menu
      className="foo-menu"
      data={initData}
      value={['1', '3']}
      onChange={onChange}
      height={document.documentElement.clientHeight * 0.6}
    />
  );
  const loadingEl = (
    <div
      style={{
        width: '100%',
        height: document.documentElement.clientHeight * 0.6,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" />
    </div>
  );

  return (
    <div className={show ? 'menu-active' : ''}>
      <div>
        <NavBar
          leftContent="Menu"
          mode="light"
          icon={
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg"
              className="am-icon am-icon-md"
              alt=""
            />
          }
          onLeftClick={handleClick}
          className="top-nav-bar"
        >
          Here is title
        </NavBar>
      </div>
      {show ? (initData ? menuEl : loadingEl) : null}
      {show ? <div className="menu-mask" onClick={onMaskClick} /> : null}
    </div>
  );
};

export default MenuExmple;
