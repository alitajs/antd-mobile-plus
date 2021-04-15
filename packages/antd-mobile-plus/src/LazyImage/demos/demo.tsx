import React, { FC } from 'react';
import { Grid } from 'antd-mobile';
import { LazyImage } from '@alitajs/antd-mobile-plus';
import placeholder from './assets/1.jpeg';
import { linkData } from './assets/image';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <Grid
        data={linkData}
        columnNum={3}
        renderItem={(item) => {
          return (
            <LazyImage
              key={item?.text}
              mode="scaleAspectFill"
              placeholder={placeholder}
              src={item?.icon}
            />
          );
        }}
      />
    </div>
  );
};

export default Demo;
