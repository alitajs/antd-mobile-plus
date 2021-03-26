import React, { FC, Fragment } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { TableType } from './PropsType';
import './index.less';

const prefixCls = 'alita-table';

const Table: FC<TableType> = (props) => {
  const { dataSource = [], columns = [], twoDimension = false } = props;

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-tr`}>
        {
          columns && columns.map((v, index) => {
            if (twoDimension && index === 0 && Array.isArray(v.title)) {
              return (
                <div className={classnames(`${prefixCls}-th`, `${prefixCls}-th-complex`)} key={index} style={{ flexBasis: `${v.width}%` }}>
                  <span className="top">{v.title[0]}</span>
                  <span className="bottom">{v.title[1]}</span>
                </div>
              )
            }
            return <div className={`${prefixCls}-th`} key={index} style={{ flexBasis: `${v.width}%` }}>{v.title}</div>
          })
        }
      </div>
      {
        dataSource && dataSource.map((v, index) => (
          <div className={`${prefixCls}-tr`} key={index}>
            {
              columns && columns.map((item, tIndex) => (
                <Fragment key={tIndex}>
                  <div
                    className={twoDimension && tIndex === 0 ? `${prefixCls}-th` : `${prefixCls}-td`}
                    style={item.align ?
                    { flexBasis: `${item.width}%`, alignItems: `${item.align}`, justifyContent: `${item.align}` } :
                    { flexBasis: `${item.width}%` }}>{item.render ? item.render(v[item.dataIndex], v, tIndex) : v[item.dataIndex]}</div>
                </Fragment>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

Table.displayName = 'Table';

export default withError(Table);
