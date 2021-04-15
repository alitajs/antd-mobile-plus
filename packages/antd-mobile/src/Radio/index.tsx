import * as React from 'react';
import ARadio from 'antd-mobile/lib/radio';
import { withError, useTracker } from '@alitajs/tracker';
import { RadioPropsType } from './PropsType';
import './index.less';

interface RadioFC<T> extends React.FC<T> {
  RadioItem?: typeof ARadio.RadioItem;
}

export const Radio: RadioFC<RadioPropsType> = (props) => {
  const { ext, ...reset } = props;

  const log = useTracker(Radio.displayName, {
    ext,
  });

  return <ARadio {...reset}></ARadio>;
};

Radio.displayName = 'Radio';
Radio.RadioItem = ARadio.RadioItem;
export default withError(Radio);
