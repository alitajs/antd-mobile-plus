import React, { FC } from 'react';
import './index.less';

const prefixCls = 'alita-card-body';

const CardBody: FC = (props) => {
  const { children } = props;
  return <div className={prefixCls}>{children}</div>;
};

export default CardBody;
