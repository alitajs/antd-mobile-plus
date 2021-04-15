import React, { ClassAttributes } from 'react';
import ASearchBar from 'antd-mobile/lib/search-bar';
import { withError, useTracker } from '@alitajs/tracker';
import { SearchBarPropsType } from './PropsType';
import './index.less';

interface SearchBarProps extends SearchBarPropsType {
  forwardRef: any;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const {
    onChange,
    onSubmit,
    onBlur,
    onCancel,
    onClear,
    onFocus,
    forwardRef,
    ext,
    ...other
  } = props;

  const log = useTracker(SearchBar.displayName, {
    ext,
  });

  return (
    <ASearchBar
      {...other}
      ref={forwardRef}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
      onSubmit={(e) => {
        onSubmit && onSubmit(e);
        log('onSubmit');
      }}
      onBlur={() => {
        onBlur && onBlur();
        log('onBlur');
      }}
      onCancel={(e) => {
        onCancel && onCancel(e);
        log('onCancel');
      }}
      onClear={(e) => {
        onClear && onClear(e);
        log('onClear');
      }}
      onFocus={() => {
        onFocus && onFocus();
        log('onFocus');
      }}
    ></ASearchBar>
  );
};

SearchBar.displayName = 'SearchBar';

export default withError(SearchBar, { forwardRef: true });
