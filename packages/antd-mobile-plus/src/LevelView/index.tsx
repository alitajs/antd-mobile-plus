import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import Card from '../Card';
import LevelBody from './components/LevelBody';
import { LevelViewType } from './PropsType';

const { Header, Body, Footer } = Card;

const LevelView: FC<LevelViewType> = ({
  title = '',
  btnText = '',
  showFooter = true,
  rightExtra,
  ...otherProps
}) => {
  return (
    <Card>
      <Header title={title} extra={rightExtra}></Header>
      <Body>
        <LevelBody {...otherProps} />
      </Body>
      {showFooter ? <Footer type="single" btnText={btnText}></Footer> : <></>}
    </Card>
  );
};

LevelView.displayName = 'LevelView';
export default withError(LevelView);
