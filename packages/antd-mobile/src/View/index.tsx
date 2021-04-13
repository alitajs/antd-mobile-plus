import * as React from 'react';
import AView from 'antd-mobile/lib/view';
import { withError } from '@alitajs/tracker';
import { ViewPropsType } from './PropsType';
import './index.less';

export const View: React.FC<ViewPropsType> = (props) => {
  const { ...reset } = props;
  return (
    <AView
      {...reset}
    ></AView>
  );
};

View.displayName = 'View';

export default withError(View);
