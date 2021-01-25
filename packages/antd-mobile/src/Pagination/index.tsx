import * as React from 'react';
import APagination from 'antd-mobile/lib/pagination';
import { withError, useTracker } from '@alitajs/tracker';
import { PaginationPropsType } from './PropsType';
import './index.less';

export const Pagination: React.FC<PaginationPropsType> = (props) => {
  const { onChange, ext, ...other } = props;

  const log = useTracker(Pagination.displayName, {
    ext,
  });

  return (
    <APagination
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
    >
    </APagination>
  );
};

Pagination.displayName = 'Pagination';


export default withError(Pagination);
