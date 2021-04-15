import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import Item from '../Item';
import { LevelBodyProps } from '../../PropsType';
import './index.less';

const prefixCls = 'alita-levelbody';
const LevelBody: FC<LevelBodyProps> = ({ data, onSelect, selectId }) => {
  return (
    <div className={prefixCls}>
      {data.map((item) => {
        return (
          <Item
            key={item.value}
            item={item}
            isActive={selectId === item.value}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};

LevelBody.displayName = 'LevelBody';
export default withError(LevelBody);
