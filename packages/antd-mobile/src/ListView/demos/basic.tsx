import React, { FC } from 'react'
import { ListView } from '@alitajs/antd-mobile';

interface ListViewExmpleProps  {}

const ListViewExmple: FC<ListViewExmpleProps> = props => {
  return (
      <div>
        <ListView></ListView>
      </div>
    );
}

export default ListViewExmple;
