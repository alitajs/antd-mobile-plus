import React, { FC } from 'react';
import Calendar from '../';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return <Calendar type="range"></Calendar>;
};

export default Demo;
