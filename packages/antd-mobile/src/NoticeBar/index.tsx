import * as React from 'react';
import ANoticeBar from 'antd-mobile/lib/notice-bar';
import { withError, useTracker } from '@alitajs/tracker';
import { NoticeBarPropsType } from './PropsType';
import './index.less';

export const NoticeBar: React.FC<NoticeBarPropsType> = (props) => {
  const { ext, onClick, ...reset } = props;

  const log = useTracker(NoticeBar.displayName, {
    ext,
  });

  return (
    <ANoticeBar
      onClick={(...e) => {
        onClick && onClick(...e);
        log('onClick');
      }}
      {...reset}
    ></ANoticeBar>
  );
};

NoticeBar.displayName = 'NoticeBar';

export default withError(NoticeBar);
