import * as React from 'react';
import AView from 'antd-mobile/lib/view';
import { withError } from '@alitajs/tracker';
import { ViewPropsType } from './PropsType';
import './index.less';

export const View: React.FC<
  ViewPropsType<HTMLDivElement> & { forwardRef?: any }
> = (props) => {
  const { forwardRef, ...reset } = props;
  return <AView ref={forwardRef} {...reset}></AView>;
};

View.displayName = 'View';

export default withError(View, { forwardRef: true });
