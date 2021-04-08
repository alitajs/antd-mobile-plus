import React, { FC } from 'react';
import { Icon, Grid } from '@alitajs/antd-mobile';

interface IconExmpleProps {}

const list = [
  'check-circle',
  'check',
  'check-circle-o',
  'cross-circle',
  'cross',
  'cross-circle-o',
  'up',
  'down',
  'left',
  'right',
  'ellipsis',
  'loading',
];

const IconExmple: FC<IconExmpleProps> = (props) => {
  const data = list.map((item) => ({
    icon: <Icon type={item} />,
    text: item,
  }));
  return <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />;
};

export default IconExmple;
