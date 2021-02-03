import * as React from 'react';
import AGrid from 'antd-mobile/lib/grid';
import { withError, useTracker } from '@alitajs/tracker';
import { GridPropsType } from './PropsType';
import './index.less';

export const Grid: React.FC<GridPropsType> = (props) => {
  const { onClick, renderItem, ext, ...other } = props;

  const log = useTracker(Grid.displayName, {
    ext,
  });

  return (
    <AGrid
      {...other}
      onClick={(e) => {
        onClick && onClick(e);
        log('onClick');
      }}
      renderItem={(e) => {
        renderItem && renderItem(e);
        log('renderItem');
      }}
    ></AGrid>
  );
};

Grid.displayName = 'Grid';

export default withError(Grid);
