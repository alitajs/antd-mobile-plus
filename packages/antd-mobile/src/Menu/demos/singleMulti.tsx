import React, { FC } from 'react';
import { Menu, ActivityIndicator, NavBar } from '@alitajs/antd-mobile';
import { useSetState } from 'ahooks';
import { singleMulti as data } from './data';
import './singleMulti.less';

interface MenuExmpleProps {}

const MenuExmple: FC<MenuExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    initData: null,
    show: false,
  });
  const onChange = (value) => {
    console.log(value);
  };
  const onOk = (value) => {
    console.log(value);
    onCancel();
  };
  const onCancel = () => {
    setState({ show: false });
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
      className="single-multi-foo-menu"
      data={initData}
      value={['1']}
      level={1}
      onChange={onChange}
      onOk={onOk}
      onCancel={onCancel}
      height={document.documentElement.clientHeight * 0.6}
      multiSelect
    />
  );
  const loadingEl = (
    <div
      style={{
        position: 'absolute',
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
    <div className={show ? 'multi-menu-active' : ''}>
      <div>
        <NavBar
          leftContent="Menu"
          mode="light"
          onLeftClick={handleClick}
          className="multi-top-nav-bar"
        >
          Multi select menu
        </NavBar>
      </div>
      {show ? (initData ? menuEl : loadingEl) : null}
      {show ? <div className="menu-mask" onClick={onMaskClick} /> : null}
    </div>
  );
};

export default MenuExmple;
