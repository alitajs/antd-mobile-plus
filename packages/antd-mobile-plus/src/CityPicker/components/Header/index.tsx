import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { CityPickerHeaderType } from '../../PropsType';
import './index.less';

const prefixCls = 'alita-header';
const Header: FC<CityPickerHeaderType> = ({ onClose, title = '请选择' }) => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-title`}>{title}</div>
      <i className={`${prefixCls}-close`} onClick={onClose}></i>
    </div>
  );
};

Header.displayName = 'Header';
export default withError(Header);
