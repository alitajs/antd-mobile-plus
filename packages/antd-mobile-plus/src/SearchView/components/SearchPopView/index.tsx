import React, { FC, useState, useEffect, useRef } from 'react';
import FilterCell from '../FilterCell';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import { SearchFilterDataType } from '../../PropsType';
import Popup from '../../../Popup';
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

  /**
   * @description 最大面板高度
   * @default 50vh
   */
  maxHeight?: string;

  /**
   * 去除目标元素，只响应目标元素之外的节点
   */
  awayRef?: any;

  /**
   * @description 遮罩层所在区域滚动节点
   * @default document.documentElement
   */
  scrollElement?: HTMLElement;
}

const SearchPopView: FC<SearchPopViewProps> = (props) => {
  const {
    data = [],
    visiable = false,
    filterValue = '',
    onHide = () => {},
    onChange = () => {},
    onFilterSelect = () => {},
    onRenderPanel,
    maxHeight,
    children,
    awayRef,
    scrollElement,
  } = props;

  return (
    <>
      {children}
      <Popup
        awayRef={awayRef}
        show={visiable}
        scrollElement={scrollElement}
        style={{
          maxHeight,
          top: 0,
        }}
        onClose={() => {
          onHide();
        }}
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
      </Popup>
    </>
  );
};

SearchPopView.displayName = 'SearchPopView';

export default withError(SearchPopView);
