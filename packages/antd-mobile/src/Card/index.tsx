import * as React from 'react';
import ACard from 'antd-mobile/lib/card';
import CardHeader from 'antd-mobile/lib/card/CardHeader';
import CardBody from 'antd-mobile/lib/card/CardBody';
import CardFooter from 'antd-mobile/lib/card/CardFooter';
import { withError } from '@alitajs/tracker';
import { CardPropsType } from 'antd-mobile/es/card/PropsType';
import './index.less';

interface CardFC<CardPropsType> extends React.FC<CardPropsType> {
  Header?: typeof CardHeader;
  Footer?: typeof CardFooter;
  Body?: typeof CardBody;
}

export const Card: CardFC<CardPropsType> = (props) => {
  const { ...reset } = props;
  return <ACard {...reset}></ACard>;
};

Card.displayName = 'Card';
Card.Header = ACard.Header;
Card.Footer = ACard.Footer;
Card.Body = ACard.Body;
export default withError(Card);
