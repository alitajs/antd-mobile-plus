import * as React from 'react';
import { setTracker, withError, useTracker } from '@alitajs/tracker';

// Tracker.setTracker(amdTracker)

export const Demo: React.FC = (props) => {
  setTracker({
    log(component, params, ext) {
      console.log(component); // 组件名
      console.log(params.version); // antd-mobile 版本号
      console.log(params.reactVersion); // react 版本号
      console.log(params.type); // 内置类型，分为 RENDERED(渲染), CUSTOM(组件自定义的上报)
      // 可选，组件额外的参数，比如 Button 会额外传 params.c1={type: props.type}
      console.log(params);
      // 可选，当 params.type===CUSTOM 的时候，组件可能会传的对应的数据
      // 比如 Button 点击的时候会传 ext='OnPress1'
      console.log(ext);
    },
  });
  const log = useTracker(Demo.displayName, {
    type: 'Demo',
  });
  return (
    <button
      data-y="123"
      onClick={() => {
        log('OnPress1');
      }}
    >
      点击查看控制台
    </button>
  );
};
export default withError(Demo);
