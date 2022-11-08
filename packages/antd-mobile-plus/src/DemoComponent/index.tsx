import * as React from 'react';
import classnames from 'classnames';
import Button from 'antd-mobile-v2/lib/button';
import { withError, useTracker } from '@alitajs/tracker';
import { DemoPropsType } from './PropsType';
import useCompleteLocale from '../LocaleProvider/useCompleteLocale';
import './index.less';

const prefixCls = 'alita-demo';

export const DemoComponent: React.FC<DemoPropsType> = (props) => {
  const { className, type = 'primary', onClick, title } = props;

  const log = useTracker(DemoComponent.displayName, {
    type,
  });

  const lang = useCompleteLocale();

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
      {title ?? lang.DemoComponent.text}
    </Button>
  );
};

DemoComponent.displayName = 'DemoComponent';
DemoComponent.defaultProps = {
  className: '',
};

export default withError(DemoComponent);
