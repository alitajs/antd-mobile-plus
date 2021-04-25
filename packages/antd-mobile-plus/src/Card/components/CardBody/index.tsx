import React, { FC } from 'react';
import { CardBodyType } from '../../PropsType';
import './index.less';

const prefixCls = 'alita-card-body';

const CardBody: FC<CardBodyType> = (props) => {
  const { children, ...reset } = props;
  return (
    <div className={prefixCls} {...reset}>
      {children}
    </div>
  );
};

export default CardBody;
