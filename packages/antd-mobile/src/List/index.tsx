import * as React from 'react';
import AList from 'antd-mobile/lib/list';
import { withError, useTracker } from '@alitajs/tracker';
import ListItem from './ListItem';
import { ListPropsType } from './PropsType';
import './index.less';

interface ListFC<T> extends React.FC<T> {
  Item?: typeof ListItem;
}

export const List: ListFC<ListPropsType> = (props) => {
  const { ...reset } = props;
  return <AList {...reset}></AList>;
};

List.displayName = 'List';
List.Item = ListItem;
export default withError(List);
