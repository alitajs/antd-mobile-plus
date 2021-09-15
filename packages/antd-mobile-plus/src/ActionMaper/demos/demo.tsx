import React, { FC, useRef, useEffect, useState } from 'react';
import { ActionMaper } from '@alitajs/antd-mobile-plus';
import { setTracker } from '@alitajs/tracker';
import Label from 'react-bmapgl/Overlay/Label';

const Demo: FC = (props) => {
  const mapRef = useRef(null);
  const [location, setLocation] = useState({});
  setTracker({
    log(component, params, ext) {
      console.log(component, params, ext); // 组件名
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setLocation({
        lat: 30.48,
        lng: 114.4044,
      });
    }, 5000);
  }, []);
  return (
    <div style={{ padding: '20px' }}>
      <ActionMaper
        mapRefCallback={(ref: null) => {
          mapRef.current = ref;
        }}
        title="执行位置"
        detailAddress="四川省成都市金牛区马鞍东路11号马鞍东路小区附近45米"
        coordinate={location}
        initialzeZoom={8}
      >
        <Label
          map={mapRef}
          text="自定义文字"
          position={new (window as any).BMapGL.Point(114.40444, 33.91489)}
        />
      </ActionMaper>
      <div style={{ marginTop: '20px' }}>
        <ActionMaper
          title="执行"
          detailAddress="正在获取位置信息..."
          onLocation={(t) => {
            console.log('onLocation:', t);
          }}
          onLocationBefore={() => {}}
          // rightExt={() => <div style={{ color: 'red' }}>自定义按钮</div>}
        ></ActionMaper>
      </div>
    </div>
  );
};
export default ActionMaper.MapApiLoaderHOC({
  ak: 'YqLjyHLyywp2A1EP9lWh0HfSCGeIWOYr',
})(Demo);
