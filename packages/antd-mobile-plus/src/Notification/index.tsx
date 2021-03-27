import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import AntdList from "antd-mobile/lib/list";
import { NotificationType } from './PropsType';
import './index.less';

const prefixCls = 'alita-notification';

const Notification: FC<NotificationType> = (props) => {
  const {
    className,
    style,
    title,
    dataSource = [],
  } = props;

  const log = useTracker(Notification.displayName, {});

  return (
    <div className={className} style={style}>
      <div className={`${prefixCls}-header`}>{title}</div>
      <AntdList>
        {
          dataSource.map((item, index) => {
            return (
              <AntdList.Item
                extra={item.extra}
                align={item.extraAlign}
                arrow={item.arrow}
                thumb={item.thumb}
                multipleLine
                onClick={() => {
                  log('notification-click');
                  item.onClick && item.onClick(item)}
                }
                key={index}
              >
                {item.title} <AntdList.Item.Brief>{item.subTitle}</AntdList.Item.Brief>
              </AntdList.Item>
            );
          })
        }
      </AntdList>
    </div>
  );
};

Notification.displayName = 'Notification';

export default withError(Notification);
