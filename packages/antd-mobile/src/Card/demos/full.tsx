import React, { FC } from 'react';
import { Card, WingBlank, WhiteSpace } from '@alitajs/antd-mobile';

interface CardExmpleProps {}

const CardExmple: FC<CardExmpleProps> = (props) => {
  return (
    <div>
      <WhiteSpace size="lg" />
      <Card full>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>
    </div>
  );
};

export default CardExmple;
