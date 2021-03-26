import React, { FC } from 'react';
import { Icon } from 'antd-mobile';
import { SimpleCard } from '@alitajs/antd-mobile-plus';

interface DemoProps { }

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <SimpleCard headerTitle="销售额">
        周同比 12%<br />
            日同比 11%<br />
            日销售额 ￥12,423
        </SimpleCard>
      <br />
      <SimpleCard full headerTitle="线上热门搜索">
        搜索用户数 12321<br />
            人均搜索次数 2.7<br />
        <br />
      </SimpleCard>
      <br />
      <SimpleCard
        headerTitle="运营活动效果"
        headerThumb={<Icon type="cross-circle" style={{ width: 18, height: 18, float: "left", fill: "#f0db37", marginRight: 8 }} />}
      >
        周同比 12%<br />
            日同比 11%<br />
        <br />
        <br />
      </SimpleCard>
    </div>
  );
};

export default Demo;
