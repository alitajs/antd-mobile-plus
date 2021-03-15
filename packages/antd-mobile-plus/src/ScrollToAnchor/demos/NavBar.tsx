import React, { FC } from 'react';
import './index.less';

interface NavBarProps {
  item: any;
  isActive: boolean;
}

const NavBar: FC<NavBarProps> = ({ item, isActive }) => {
  return (
    <div
      style={{
        padding: '0.2rem 0.3rem',
        color: isActive ? '#f40' : '#333',
        backgroundColor: isActive ? '#fff' : '#f5f5f5',
      }}
    >
      {item.label}
    </div>
  );
};

export default NavBar;
