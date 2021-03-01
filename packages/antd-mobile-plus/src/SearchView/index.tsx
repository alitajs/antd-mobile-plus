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
    maxHeight = '50vh',
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
      <SearchPopView
        data={filterData}
        filterValue={selectItem.value}
        visiable={visiable}
        onRenderPanel={PopViewPanel}
        maxHeight={maxHeight}
        onHide={() => {
          log('onHide');
          setVisiable(false);
          onToggoleHandle(false);
        }}
        onChange={(e) => {
          log('onChange');
          onFilterChange(e);
        }}
        onFilterSelect={(e) => {
          setSelectItem(e);
          onFilterSelected(e);
          log('onFilterSelect');
        }}
      >
        <>
          <div className={`${prefixCls}-placeholder`}></div>
          <div className={`${prefixCls}-search`}>
            <SearchLeftItem
              hidden={!showLeft}
              text={leftText ?? selectItem.label}
              isOpen={visiable}
              onClick={() => {
                log('onSearchLeftItem');
                onToggoleHandle(!visiable);
                setVisiable(!visiable);
              }}
            />
            <SearchBar {...searchBarProps} />
          </div>
        </>
      </SearchPopView>
    </div>
  );
};

SearchView.displayName = 'SearchView';

export default withError(SearchView);
