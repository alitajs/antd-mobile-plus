import * as React from 'react';
import AMenu from 'antd-mobile/lib/menu';
import { withError, useTracker } from '@alitajs/tracker';
import { MenuPropsType } from './PropsType';
import './index.less';

export const Menu: React.FC<MenuPropsType> = (props) => {
  const { ext, onChange, onOk, onCancel, ...reset } = props;

  const log = useTracker(Menu.displayName, {
    ext,
  });

  return (
    <AMenu
      onChange={(...e) => {
        onChange && onChange(...e);
        log('onChange');
      }}
      onOk={(...e) => {
        onOk && onOk(...e);
        log('onOk');
      }}
      onCancel={(...e) => {
        onCancel && onCancel(...e);
        log('onCancel');
      }}
      {...reset}
    ></AMenu>
  );
};

Menu.displayName = 'Menu';

export default withError(Menu);
