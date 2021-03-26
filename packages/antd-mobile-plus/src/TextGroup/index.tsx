import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { TextGroupType, dataItemType } from './PropsType';
import './index.less';

const prefixCls = 'alita-text-group';

const TextGroup: FC<TextGroupType> = (props) => {
  const { data = [] } = props;

  const log = useTracker(TextGroup.displayName, {});

  const listNodes = (listData: Array<dataItemType>) => {
    return listData.map((item, key) => {
      if (key < listData.length - 1) {
        return (
          <React.Fragment key={item.key}>
            <li
              className={`${prefixCls}-list-item`}
              onClick={() => {
                log('text-group-click');
                item.onClick && item.onClick(item.key);
              }}
            >
              <span>{item.text}</span>
            </li>
            <li className={`${prefixCls}-list-item`}>
              <i className={`${prefixCls}-line`} />
            </li>
          </React.Fragment>
        );
      } else {
        return (
          <li
            key={item.key}
            className={`${prefixCls}-list-item`}
            onClick={() => {
              log('text-group-click');
              item.onClick && item.onClick(item.key);
            }}
          >
            <span>{item.text}</span>
          </li>
        );
      }
    });
  };

  return (
    <div className={prefixCls}>
      <ul className={`${prefixCls}-list`}>{listNodes(data)}</ul>
    </div>
  );
};

TextGroup.displayName = 'TextGroup';

export default withError(TextGroup);
