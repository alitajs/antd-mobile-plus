import * as React from 'react';
import ATabs from 'antd-mobile/lib/tabs';
import { withError, useTracker } from '@alitajs/tracker';
import { TabsPropsType } from './PropsType';
import './index.less';

export const Tabs: React.FC<TabsPropsType> = (props) => {
  const {
    onChange,
    onTabClick,
    renderTab,
    renderTabBar,
    ext,
    ...other
  } = props;

  const log = useTracker(Tabs.displayName, {
    ext,
  });

  return (
    <ATabs
      {...other}
      onChange={(e, v) => {
        onChange && onChange(e, v);
        log('onChange');
      }}
      onTabClick={(e, v) => {
        onTabClick && onTabClick(e, v);
        log('onTabClick');
      }}
      renderTab={
        renderTab
          ? (e) => {
              log('renderTab');
              return renderTab(e);
            }
          : undefined
      }
      renderTabBar={
        renderTabBar
          ? (e) => {
              log('renderTabBar');
              return renderTabBar(e);
            }
          : undefined
      }
    ></ATabs>
  );
};

Tabs.displayName = 'Tabs';

export default withError(Tabs);
