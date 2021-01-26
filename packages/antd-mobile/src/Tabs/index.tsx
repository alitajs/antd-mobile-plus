import * as React from 'react';
import ATabs from 'antd-mobile/lib/tabs';
import { withError, useTracker } from '@alitajs/tracker';
import { TabsPropsType } from './PropsType';
import './index.less';

export const Tabs: React.FC<TabsPropsType> = (props) => {
  const { onChange, onTabClick, renderTab, renderTabBar, ext, ...other } = props;

  const log = useTracker(Tabs.displayName, {
    ext,
  });

  return (
    <ATabs
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onTabClick={(e) => {
        onTabClick && onTabClick(e);
        log('onTabClick');
      }}
      renderTab={(e) => {
        renderTab && renderTab(e);
        log('renderTab');
      }}
      renderTabBar={(e) => {
        renderTabBar && renderTabBar(e);
        log('renderTabBar');
      }}
    >
    </ATabs>
  );
};

Tabs.displayName = 'Tabs';


export default withError(Tabs);
