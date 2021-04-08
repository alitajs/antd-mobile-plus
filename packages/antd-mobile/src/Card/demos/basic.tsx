import React, { FC } from 'react'
import { Card, WingBlank, WhiteSpace } from '@alitajs/antd-mobile';

interface CardExmpleProps  {}

const CardExmple: FC<CardExmpleProps> = props => {
  return (
    <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title="This is title"
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra={<span>this is extra</span>}
      />
      <Card.Body>
        <div>This is content of `Card`</div>
      </Card.Body>
      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
    );
}

export default CardExmple;
