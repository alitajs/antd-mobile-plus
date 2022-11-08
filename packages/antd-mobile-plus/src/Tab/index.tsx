import React, { FC, useState, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import AntdTabs from 'antd-mobile-v2/lib/tabs';
import classnames from 'classnames';
import { TabType, TabItemType, TabData } from './PropsType';
import './index.less';

const prefixCls = 'alita-tab';

const TabList: FC<TabType> = (props) => {
  const { onChange, tabs, children } = props;
  const [expand, setExpand] = useState(false);
  const [page, setPage] = useState(-1);

  const log = useTracker(TabList.displayName, {});

  const onTabClick = (o: TabData, i: number, action: string) => {
    const idx = tabs.findIndex(tab => tab.title === o.title);
    setExpand(false);
    setPage(idx);
    log('onTabClick');
    if (action === "nav" && typeof onChange === "function") {
      onChange((o as TabItemType), i);
    }
  };

  const onThumbClicked = () => {
    setExpand(!expand);
  };

  let detailContent = null;
  if (!expand) {
    detailContent = <div className={`${prefixCls}-list`} />;
  } else {
    detailContent = (
      <div className={classnames(`${prefixCls}-list`, `${prefixCls}-list-visible`)}>
        {tabs.map((t, i) => (
            <span
              key={t.title}
              className={`${prefixCls}-item`}
              onClick={() => {
                onTabClick(t, i, 'nav');
              }}
            >
              {t.icon && <span className={`${prefixCls}-item-icon`}>{t.icon}</span>}
              <span className={`${prefixCls}-item-title`}>{t.title}</span>
            </span>
          )
        )}
      </div>
    );
  }

  return (
    <div className={prefixCls}>
      <AntdTabs tabs={tabs} page={page} onTabClick={(o: TabData, i: number) => onTabClick(o, i, 'nav')}>{children}</AntdTabs>
      <span className={`${prefixCls}-thumb`} onClick={onThumbClicked}>
        <i className={classnames(`${prefixCls}-icon`, `${prefixCls}-icon-menu`)}></i>
      </span>
      {detailContent}
      {expand ? (
        <div
          onClick={() => setExpand(false)}
          className={`${prefixCls}-modal`}
        />
      ) : null}
    </div>
  );
};

TabList.displayName = 'TabList';

export default withError(TabList);
