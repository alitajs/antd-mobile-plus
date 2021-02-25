/*
 * @Author: your name
 * @Date: 2021-02-24 18:00:19
 * @LastEditTime: 2021-02-24 18:03:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /antd-mobile-plus/packages/antd-mobile-plus/src/SearchView/index.tsx
 */
import React, { FC, useState, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { SearchViewType, SearchFilterDataType } from './PropsType';
import SearchBar from './components/SearchBar';
import SearchLeftItem from './components/SearchLeftItem';
import SearchPopView from './components/SearchPopView';
import './index.less';
import { filterItemWithValue } from './utils/searchBarUtils';

const prefixCls = 'alita-search-view';
const SearchView: FC<SearchViewType> = (props) => {
  const {
    showLeft = false,
    filterData = [],
    filterValue = '',
    onFilterChange = () => {},
    onFilterSelected = () => {},
    onToggoleHandle = () => {},
    PopViewPanel,
    open = false,
    leftText,
    ...searchBarProps
  } = props;
  const [visiable, setVisiable] = useState(open);
  const [selectItem, setSelectItem] = useState<SearchFilterDataType>(
    filterItemWithValue(filterData, filterValue),
  );

  useEffect(() => {
    setVisiable(open);
  }, [open]);

  useEffect(() => {
    setSelectItem(filterItemWithValue(filterData, filterValue));
  }, [filterValue]);

  const log = useTracker(SearchView.displayName, {});
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-search`}>
        <SearchLeftItem
          hidden={!showLeft}
          text={leftText ?? selectItem.label}
          isOpen={visiable}
          onClick={() => {
            onToggoleHandle(!visiable);
            setVisiable(!visiable);
          }}
        />
        <SearchBar {...searchBarProps} />
      </div>
      <SearchPopView
        data={filterData}
        filterValue={selectItem.value}
        visiable={visiable}
        onRenderPanel={PopViewPanel}
        onHide={() => {
          log('onHide');
          setVisiable(false);
          onToggoleHandle(false);
        }}
        onChange={(e) => {
          log('SearchPopView: onChange');
          onFilterChange(e);
        }}
        onFilterSelect={(e) => {
          setSelectItem(e);
          onFilterSelected(e);
        }}
      />
    </div>
  );
};

SearchView.displayName = 'SearchView';

export default withError(SearchView);
