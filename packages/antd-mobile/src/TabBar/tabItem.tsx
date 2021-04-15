import * as React from 'react';
import ATabBar from 'antd-mobile/lib/tab-bar';
import { withError, useTracker } from '@alitajs/tracker';
import { TabBarItemPropsType } from './PropsType';
import './index.less';

const ATabBarItem = ATabBar.Item;

export const TabBarItem: React.FC<TabBarItemPropsType> = (props) => {
  const { ext, onPress, ...reset } = props;

  const log = useTracker(TabBarItem.displayName, {
    ext,
  });

  return (
    <ATabBarItem
      onPress={(...e) => {
        onPress && onPress();
        log('onPress');
      }}
      {...reset}
    ></ATabBarItem>
  );
};

TabBarItem.displayName = 'TabBarItem';
export default withError(TabBarItem);
