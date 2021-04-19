import React from 'react';
import { WingBlank, Carousel } from '@alitajs/antd-mobile';
// import { Carousel } from 'antd-mobile';
import './carousel.less';
const VerticalDemo = () => (
  <WingBlank>
    <Carousel
      className="my-carousel"
      vertical
      dots={false}
      dragging={false}
      swiping={false}
      autoplay
      infinite
    >
      <div className="v-item">carousel 1</div>
      <div className="v-item">carousel 2</div>
      <div className="v-item">carousel 3</div>
    </Carousel>
  </WingBlank>
);

export default VerticalDemo;
