import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';

import './index.less';
import { CardType, CardHeaderType, CardFooterType } from './PropsType';

export interface CarrdFC<T> extends FC<T> {
  Header: FC<CardHeaderType>;
  Body: FC<T>;
  Footer: FC<CardFooterType>;
}

const prefixCls = 'alita-card';

const Card: CarrdFC<CardType> = (props) => {
  const { children } = props;
  const log = useTracker(Card.displayName, {});
  const childs = React.Children.toArray(children);
  return (
    <div className={prefixCls}>
      {childs.map((child) => {
        if (!React.isValidElement(child)) return;
        const props = {
          ...child.props,
        };
        return React.cloneElement(child, props);
      })}
    </div>
  );
};
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.displayName = 'Card';
export default withError(Card);
