import React, { FC } from 'react';
import { Modal, Button, WhiteSpace, WingBlank } from '@alitajs/antd-mobile';

interface ModalExmpleProps {}
const operation = Modal.operation;

const ModalExmple: FC<ModalExmpleProps> = (props) => {
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Button
        onClick={() =>
          operation([
            {
              text: '标为未读',
              onPress: () => console.log('标为未读被点击了'),
            },
            {
              text: '置顶聊天',
              onPress: () => console.log('置顶聊天被点击了'),
            },
          ])
        }
      >
        operation
      </Button>
      <WhiteSpace size="lg" />
    </WingBlank>
  );
};

export default ModalExmple;
