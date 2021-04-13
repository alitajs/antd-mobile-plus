import * as React from 'react';
import ALocaleProvider from 'antd-mobile/lib/locale-provider';
import { withError, useTracker } from '@alitajs/tracker';
import { LocaleProviderPropsType } from './PropsType';
import './index.less';

export const LocaleProvider: React.FC<LocaleProviderPropsType> = (props) => {
  const { ...reset } = props;

  return (
    <ALocaleProvider
      {...reset}
    ></ALocaleProvider>
  );
};

LocaleProvider.displayName = 'LocaleProvider';

export default withError(LocaleProvider);
