import React, { FC, useRef, useMemo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { CityPickerListViewType } from '../../PropsType';
import classnames from 'classnames';
import './index.less';

interface TableViewType extends CityPickerListViewType {
  /**
   * @description 数据别名
   */
  alias: { id: string; label: string };
  /**
   * @description 选中列表
   */
  selectList: object[];
}

const prefixCls = 'alita-table-view';
const TableView: FC<TableViewType> = ({
  data = [],
  alias,
  onChange,
  selectList,
}) => {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const ids = selectList.map((item) => item[alias.id]);
  useMemo(() => {
    if (scrollWrapper.current) {
      scrollWrapper.current.scrollTo(0, 0);
    }
  }, [data]);
  return (
    <div className={prefixCls} ref={scrollWrapper}>
      {data.map((item) => {
        return (
          <div
            className={classnames(`${prefixCls}-item`, {
              [`${prefixCls}-item-select`]: ids.includes(item[alias.id]),
            })}
            onClick={() => {
              onChange && onChange(item);
            }}
            key={item[alias.id]}
          >
            {item[alias.label]}
          </div>
        );
      })}
    </div>
  );
};

TableView.displayName = 'TableView';
export default withError(TableView);
