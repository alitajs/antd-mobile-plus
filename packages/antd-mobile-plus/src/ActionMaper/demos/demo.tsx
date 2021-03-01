/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-20 15:44:21
 */

import React, { FC } from 'react';
import { ActionMaper } from '@alitajs/antd-mobile-plus';
import { setTracker } from '@alitajs/tracker';

const Demo: FC = (props) => {
  setTracker({
    log(component, params, ext) {
      console.log(component, params, ext); // 组件名
    },
  });
  return (
    <div style={{ padding: '20px' }}>
      <ActionMaper
        title="执行位置"
        detailAddress="四川省成都市金牛区马鞍东路11号马鞍东路小区附近45米"
        coordinate={{
          lat: 33.914889,
          lng: 114.404449,
        }}
        initialzeZoom={8}
      />
      <div style={{ marginTop: '20px' }}>
        <ActionMaper
          title="执行"
          detailAddress="正在获取位置信息..."
          onLocation={(t) => {
            console.log('onLocation:', t);
          }}
          rightExt={() => <div style={{ color: 'red' }}>自定义按钮</div>}
        />
      </div>
    </div>
  );
};
export default ActionMaper.MapApiLoaderHOC({
  ak: 't9A84QM5lt6a3SMumuQOQtvM2spIQQ2A',
})(Demo);
