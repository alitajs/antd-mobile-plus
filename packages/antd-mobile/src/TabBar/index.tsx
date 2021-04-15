import * as React from 'react';
import ATabBar from 'antd-mobile/lib/tab-bar';
import { withError } from '@alitajs/tracker';
import { TabBarPropsType, TabBarItemPropsType } from './PropsType';
import TabBarItem from './tabItem';
import './index.less';

interface TabBarFC<T = {}> extends React.FC<T> {
  Item: React.FC<TabBarItemPropsType>;
}

export const TabBar: TabBarFC<TabBarPropsType> = (props) => {
  const { ...reset } = props;
  return <ATabBar {...reset}></ATabBar>;
};

TabBar.displayName = 'TabBar';
TabBar.Item = TabBarItem;
export default withError(TabBar);
