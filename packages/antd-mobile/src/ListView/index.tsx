import * as React from 'react';
import AListView from 'antd-mobile/lib/list-view';
import { withError } from '@alitajs/tracker';
import { ListViewProps, IndexedListProps, DataSourceType } from './PropsType';
import './index.less';
interface ListViewFC<T> extends React.FC<T> {
  DataSource?: DataSourceType;
  IndexedList: IndexedListProps;
}

export const ListView: ListViewFC<ListViewProps & { forwardRef?: any }> = (
  props,
) => {
  const { ext, forwardRef, ...reset } = props;
  return <AListView ref={forwardRef} {...reset}></AListView>;
};

ListView.displayName = 'ListView';
ListView.DataSource = AListView.DataSource;
ListView.IndexedList = AListView.IndexedList;
export default withError(ListView, { forwardRef: true });
