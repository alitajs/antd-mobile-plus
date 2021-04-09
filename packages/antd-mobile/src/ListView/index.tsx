import * as React from 'react';
import AListView from 'antd-mobile/lib/list-view';
import { withError, useTracker } from '@alitajs/tracker';
import { ListViewProps } from './PropsType';
import './index.less';

export const ListView: React.FC<ListViewProps> = (props) => {
  const { ext, ...reset } = props;

  const log = useTracker(ListView.displayName, {
    ext,
  });

  return <AListView {...reset}></AListView>;
};

ListView.displayName = 'ListView';

export default withError(ListView);
