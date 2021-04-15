import React, { FC, useState } from 'react';
import { NewsStatistic } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [active, setActive] = useState(false);
  return (
    <NewsStatistic
      text="阅读"
      readNum={2091}
      starNum={5}
      active={active}
      onClick={() => { setActive(!active) }}
    />
  );
};

export default Demo;
