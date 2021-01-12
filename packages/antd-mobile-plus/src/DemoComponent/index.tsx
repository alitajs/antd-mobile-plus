import * as React from 'react';
import classnames from 'classnames';
import { Button } from 'antd-mobile';
import { withError, useTracker, setTracker } from '@alitajs/tracker';
import { DemoPropsType } from './PropsType';
import './index.less';

const prefixCls = 'alita-demo';

export const Demo: React.FC<DemoPropsType> = (props) => {
  const { className, type = 'primary', onClick } = props;
  // 这个方法应该统一添加
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
    type,
  });

  const [cls, setCls] = React.useState({
    [`${prefixCls}`]: true,
    [`${prefixCls}-active`]: false,
  });

  const clsStr = classnames({
    ...cls,
    [`${prefixCls}-${type}`]: true,
    [`${className}`]: !!className,
  });

  return (
    <Button
      className={clsStr}
      type="primary"
      onClick={(e) => {
        onClick && onClick(e);
        log('onClick');
      }}
    >
      点击查看日志
    </Button>
  );
};

Demo.displayName = 'Demo';
Demo.defaultProps = {
  className: '',
};

export default withError(Demo);
