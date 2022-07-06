import React, { FC, Fragment, useState, useEffect, useRef } from 'react';
// import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { TableType } from './PropsType';
import './index.less';

const prefixCls = 'alita-table';

const Table: FC<TableType> = (props) => {
  const {
    dataSource = [],
    columns = [],
    twoDimension = false,
    titleBackground = '#f7f7f7',
    titleColor = '#333',
    fixedLeft = false, 
    firstLeftStyle={}
  } = props;
  const container = useRef<any>(null);
  const [trWidth, setTrWidth] = useState<string>('');
  const [pxRatio, setPxRatio] = useState(1);

  useEffect(() => {
    let clientWidth = 0;
    if (container.current) {
      clientWidth = container.current.clientWidth;
    }
    let width = 0;
    if (Array.isArray(columns)) {
      columns.map((item) => {
        width += parseFloat(`${item.width}`);
      });
    }
    if (width < clientWidth) {
      setPxRatio(clientWidth / width);
      width = clientWidth;
    }
    setTrWidth(`${width}px`);
  }, [columns]);

  const fixedLeftStyle = (v: any, index: number, align: any, isData: boolean) => {
    let object: any = {};
    object.width = `${(v.width || 100) * pxRatio}px`;
    if (fixedLeft) {
      if (index === 0) {
        object.position = `sticky`;
        object.top = 0;
        object.left = 0;
      } 
    } 
    //表头添加样式
    if (!isData) {
      object.background =`${titleBackground}`;
      object.color =`${titleColor}`;
    }
    //左侧首列添加样式
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
    <div className={prefixCls} ref={container}>
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
