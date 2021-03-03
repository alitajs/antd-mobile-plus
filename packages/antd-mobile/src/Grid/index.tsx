import * as React from 'react';
import AGrid from 'antd-mobile/lib/grid';
import { withError, useTracker } from '@alitajs/tracker';
import { GridPropsType } from './PropsType';
import './index.less';
//
export const Grid: React.FC<GridPropsType> = (props) => {
  const { onClick, renderItem, ext, ...other } = props;

  const log = useTracker(Grid.displayName, {
    ext,
  });

  return (
    <AGrid
      {...other}
      onClick={(e, itemIndex) => {
        onClick && onClick(e, itemIndex);
        log('onClick');
      }}
      renderItem={
        renderItem
          ? (e, index) => {
              log('renderItem');
              return renderItem ? renderItem(e, index) : <></>;
            }
          : undefined
      }
    ></AGrid>
  );
};

Grid.displayName = 'Grid';

export default withError(Grid);
