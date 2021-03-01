import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Button from './components/Button';
import { FooterBarType } from './PropsType';
import './index.less';

const prefixCls = 'alita-tool-bar';

const FooterBar: FC<FooterBarType> = ({ data = [] }) => {
  const log = useTracker(FooterBar.displayName, {});
  return (
    <div className={prefixCls}>
      {data.map((item) => {
        return (
          <div key={item.id} className={`${prefixCls}-item`}>
            <Button {...item} />
          </div>
        );
      })}
    </div>
  );
};

FooterBar.displayName = 'FooterBar';
export default withError(FooterBar);
