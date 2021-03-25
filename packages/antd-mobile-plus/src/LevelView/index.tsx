import React, { FC, memo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Card from '../Card';
import Item from './components/Item';
import { LevelViewType } from './PropsType';
import './index.less';

const { Header, Body, Footer } = Card;
const prefixCls = 'alita-levelview';

const LevelView: FC<LevelViewType> = ({
  title = '',
  btnText = '',
  data = [],
  onSelect,
  selectId,
  showFooter = true,
}) => {
  const LevelBody = () => (
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

  return (
    <Card>
      <Header title={title}></Header>
      <Body>
        <LevelBody />
      </Body>
      {showFooter ? <Footer type="single" btnText={btnText}></Footer> : <></>}
    </Card>
  );
};

LevelView.displayName = 'LevelView';
export default withError(memo(LevelView));
