import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { FunctionalCardType, FootItemProps } from './PropsType';
import './index.less';

const prefixCls = 'alita-functional-card';

const FunctionalCard: FC<FunctionalCardType> = (props) => {
  const {
    img,
    title = "",
    desc = "",
    foot = [],
    id = "",
    style,
  } = props;

  const log = useTracker(FunctionalCard.displayName, {});

  return (
    <div className={`${prefixCls}`} style={style}>
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-img`}>
          {img}
        </div>
        <div className={`${prefixCls}-text`}>
          <div className={`${prefixCls}-title`}>{title}</div>
          <span className={`${prefixCls}-desc`}>{desc}</span>
        </div>
      </div>
      <div className={`${prefixCls}-foot`}>
      {foot.map((item: FootItemProps, index: number) => {
        const {onClick, ...rest} = item;
        return (
          <div
            className={`${prefixCls}-foottext`}
            key={index}
            onClick={() => {
              log('functionCardFootClick');
              item.onClick && item.onClick(id, rest)}
            }
          >
            {item.name}
          </div>
        )
      })}
      </div>
    </div>
  );
};

FunctionalCard.displayName = 'FunctionalCard';

export default withError(FunctionalCard);
