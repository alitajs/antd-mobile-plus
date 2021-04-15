import * as React from 'react';
import AFlex from 'antd-mobile/lib/flex';
import { withError } from '@alitajs/tracker';
import { FlexPropsType } from './PropsType';
import './index.less';

interface FlexFC<T> extends React.FC<T> {
  Item?: typeof AFlex.Item;
}

export const Flex: FlexFC<FlexPropsType> = (props) => {
  const { ...reset } = props;
  return <AFlex {...reset}></AFlex>;
};

Flex.displayName = 'Flex';
Flex.Item = AFlex.Item;
export default withError(Flex);
