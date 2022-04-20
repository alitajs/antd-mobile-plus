import React, { FC, Fragment, useState, useEffect, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { TableType } from './PropsType';
import './index.less';

const prefixCls = 'alita-table';

const Table: FC<TableType> = (props) => {
  const { dataSource = [], columns = [], twoDimension = false, titleBackground = '#f7f7f7', titleColor = '#333' } = props;
  const container = useRef<any>(null);
  const [trWidth, setTrWidth] = useState<string>('');
  const [pxRatio, setPxRatio] = useState(1);

  useEffect(() => {
    let clientWidth = 0;
    if (container.current) {
      clientWidth = container.current.clientWidth;
    }
    let width = 0;
    if(Array.isArray(columns)) {
      columns.map((item) => {
        width += item.width || 0;
      });
    }
    if (width < clientWidth) {
      setPxRatio(clientWidth / width);
      width = clientWidth;
    } 
    setTrWidth(`${width}px`);
  },[columns]);

  return (
    <div className={prefixCls} ref={container}>
      <div className={`${prefixCls}-tr`} style={{ width: `${trWidth}`}}>
        {
          columns && columns.map((v, index) => {
            if (twoDimension && index === 0 && Array.isArray(v.title)) {
              return (
                <div className={classnames(`${prefixCls}-th`, `${prefixCls}-th-complex`)} key={index} style={{ width: `${(v.width || 100) * pxRatio}px`, background: `${titleBackground}`, color: `${titleColor}` }}>
                  <span className="top">{v.title[0]}</span>
                  <span className="bottom">{v.title[1]}</span>
                </div>
              )
            }
            return <div className={`${prefixCls}-th`} key={index} style={{ width: `${(v.width || 100) * pxRatio}px`, background: `${titleBackground}`, color: `${titleColor}`}}>{v.title}</div>
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
                    style={item.align ?
                    { width: `${(item.width || 100) * pxRatio}px`, alignItems: `${item.align}`, justifyContent: `${item.align}` } :
                    { width: `${(item.width || 100) * pxRatio}px` }}>{item.render ? item.render(v[item.dataIndex], v, tIndex) : v[item.dataIndex]}</div>
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
