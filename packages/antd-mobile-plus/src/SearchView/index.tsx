/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-22 16:00:20
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
    ...searchBarProps
  } = props;
  const [visiable, setVisiable] = useState(false);
  const [selectItem, setSelectItem] = useState<SearchFilterDataType>(
    filterItemWithValue(filterData, filterValue),
  );

  useEffect(() => {
    setSelectItem(filterItemWithValue(filterData, filterValue));
  }, [filterValue]);

  const log = useTracker(SearchView.displayName, {});
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-search`}>
        <SearchLeftItem
          hidden={!showLeft}
          text={selectItem.label}
          isOpen={visiable}
          onClick={() => {
            setVisiable(!visiable);
          }}
        />
        <SearchBar {...searchBarProps} />
      </div>
      <SearchPopView
        data={filterData}
        filterValue={selectItem.value}
        visiable={visiable}
        onHide={() => {
          log('onHide');
          setVisiable(false);
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
