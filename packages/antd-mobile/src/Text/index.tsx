import * as React from 'react';
import AText from 'antd-mobile/lib/text';
import { withError, useTracker } from '@alitajs/tracker';
import { TextPropsType } from './PropsType';
import './index.less';

export const Text: React.FC<TextPropsType> = (props) => {
  const { ...reset } = props;
  return (
    <AText
      {...reset}
    ></AText>
  );
};

Text.displayName = 'Text';
export default withError(Text);
