/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-22 17:14:49
 */
import React, { FC, useRef, useState, useEffect } from 'react';
import FilterCell from '../FilterCell';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import { SearchFilterDataType } from '../../PropsType';
import './index.less';

interface SearchPopViewProps {
  /**
   * @description 是否展示
   */
  visiable: boolean;
  /**
   * @description 筛选项数据内容
   */
  data: SearchFilterDataType[];
  /**
   * @description 默认选择
   */
  filterValue: string;
  /**
   * @description 当筛选项关闭
   */
  onHide?: () => void;
  /**
   * @description 筛选项修改发生变化
   */
  onChange?: (e: SearchFilterDataType) => void;
  /**
   * @description 筛选条件选中时调用
   */
  onFilterSelect?: (e: SearchFilterDataType) => void;

  /**
   * @description 自定义下拉弹出面板
   */
  onRenderPanel?: React.ReactNode;
}

const prefixCls = 'alita-search-pop-view';

const SearchPopView: FC<SearchPopViewProps> = (props) => {
  const {
    data = [],
    visiable = false,
    filterValue = '',
    onHide = () => {},
    onChange = () => {},
    onFilterSelect = () => {},
    onRenderPanel,
  } = props;
  const flagRef = useRef(null);

  return (
    <>
      <div className={`${prefixCls}-flag`} ref={flagRef}></div>
      <div
        className={`${prefixCls}-mask`}
        hidden={!visiable}
        onClick={() => {
          onHide();
        }}
      ></div>
      <div
        className={classnames(`${prefixCls}`, {
          [`${prefixCls}-wrapper`]: visiable,
        })}
      >
        <div
          className={classnames(`${prefixCls}-animation`, {
            [`${prefixCls}-show`]: visiable,
          })}
        >
          {onRenderPanel ??
            data.map((item) => (
              <FilterCell
                key={item.value}
                text={item.label}
                selected={item.value === filterValue}
                onClick={() => {
                  onChange(item);
                  onHide();
                }}
                onSelected={() => {
                  onFilterSelect(item);
                }}
              />
            ))}
        </div>
      </div>
    </>
  );
};

SearchPopView.displayName = 'SearchPopView';

export default withError(SearchPopView);
