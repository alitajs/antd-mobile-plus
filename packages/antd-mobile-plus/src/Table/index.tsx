import React, { FC, Fragment, useState, useEffect } from 'react';
// import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { TableType } from './PropsType';
import './index.less';

const prefixCls = 'alita-table';
let fixedLeftMargin = 0; 

const Table: FC<TableType> = (props) => {
  const { dataSource = [], columns = [], twoDimension = false, fixedLeft = false, firstLeftStyle={} } = props;
  const [trWidth, setTrWidth] = useState<string>('');

  useEffect(() => {
    let width = 0;
    if(Array.isArray(columns)) {
      columns.map((item) => {
        width += item.width || 0;
      });
    }
    setTrWidth(`${width}rem`);
  },[columns]);

  const fixedLeftStyle = (v: any, index: number, align: any, isData: boolean) => {
    let object: any = {};
    object.width = `${v.width}rem`;
    if (fixedLeft) {
      if (index === 0) {
        fixedLeftMargin = v.width;
        object.position = `sticky`;
        object.top = 0;
        object.left = 0;
      } 
    } 
    if (firstLeftStyle && typeof firstLeftStyle === 'object' && index === 0 && isData) {
      for (const key in firstLeftStyle) {
        object[key] = firstLeftStyle[key];
      }
    }
    if (align) {
      object.alignItems = `${v.align}`;
      object.justifyContent = `${v.align}`;
    }
    return object;
  };

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-tr`} style={{ width: `${trWidth}`}}>
        {
          columns && columns.map((v, index) => {
            if (twoDimension && index === 0 && Array.isArray(v.title)) {
              return (
                <div className={classnames(`${prefixCls}-th`, `${prefixCls}-th-complex`)} key={index} style={fixedLeftStyle(v, index, null, false)}>
                  <span className="top">{v.title[0]}</span>
                  <span className="bottom">{v.title[1]}</span>
                </div>
              )
            }
            return <div className={`${prefixCls}-th`} key={index} style={fixedLeftStyle(v, index, null, false)}>{v.title}</div>
          })
        }
      </div>
      {
        dataSource && dataSource.map((v, index) => (
          <div className={`${prefixCls}-tr`} key={index} style={{ width: `${trWidth}`}}>
            {
              columns && columns.map((item, tIndex) => (
                <Fragment key={tIndex}>
                  <div
                    className={twoDimension && tIndex === 0 ? `${prefixCls}-th` : `${prefixCls}-td`}
                    style={fixedLeftStyle(item, tIndex, item.align, true)}>{item.render ? item.render(v[item.dataIndex], v, tIndex) : v[item.dataIndex]}</div>
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

export default Table;
