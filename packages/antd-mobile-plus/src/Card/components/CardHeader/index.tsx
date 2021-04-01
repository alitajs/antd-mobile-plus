import React, { FC } from 'react';
import { CardHeaderType } from '../../PropsType';
import './index.less';

const prefixCls = 'alita-card-header';

const CardHeader: FC<CardHeaderType> = (props) => {
  const { title, extra, thumb, style } = props;
  return (
    <div className={prefixCls} style={style}>
      <div>
        {thumb ? thumb : ''}
        <span className={`${prefixCls}-title`}>{title}</span>
      </div>
      {extra ? <div>{extra}</div> : ''}
    </div>
  );
};

export default CardHeader;
