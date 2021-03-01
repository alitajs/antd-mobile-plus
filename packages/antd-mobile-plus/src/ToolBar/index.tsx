import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Button from './components/Button';
import { ToolBarType } from './PropsType';
import './index.less';

const prefixCls = 'alita-tool-bar';

const ToolBar: FC<ToolBarType> = ({ data = [] }) => {
  const log = useTracker(ToolBar.displayName, {});
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

ToolBar.displayName = 'ToolBar';
export default withError(ToolBar);
