/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-22 17:11:20
 */
import React, { FC, useState, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface SearchBarProps {
  /**
   *  @description 搜索框文字发生变化
   */
  onChange?: (v: string) => void;

  /**
   * @description 搜索框文字占位符
   */
  placeholder?: string;

  /**
   * @description 搜索框初始化文字内容
   */
  initalzeValue?: string;

  /**
   * @description 搜索框最大文字长度
   */
  maxLength?: number;

  /**
   * @description 搜索框点击搜索按钮
   */
  onSearch?: (v: string) => void;

  /**
   * @description 搜索框聚焦时
   */
  onFocus?: (e: string) => void;

  /**
   * @description 搜索框失去焦点时
   */
  onBlur?: (e: string) => void;

  /**
   * @description input类型
   * @default `text`
   */
  type?: string;
}

const prefixCls = 'alita-search-bar';

const SearchBar: FC<SearchBarProps> = ({
  initalzeValue = '',
  onSearch = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  maxLength = 0,
  placeholder,
  type = 'text',
}) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState(() => {
    if (maxLength === 0 || maxLength >= initalzeValue.length) {
      return initalzeValue;
    } else if (maxLength < initalzeValue.length) {
      return initalzeValue.substring(0, maxLength);
    }
    return '';
  });

  const log = useTracker(SearchBar.displayName, {});
  return (
    <div className={prefixCls}>
      <i className={`${prefixCls}-search`}></i>
      <input
        ref={inputRef}
        type={type}
        enterkeyhint="search"
        className={`${prefixCls}-input`}
        value={value}
        onFocus={(e) => {
          log('onFocus');
          onFocus(e.currentTarget.value);
        }}
        onBlur={(e) => {
          log('onBlur');
          onBlur(e.currentTarget.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            log(`onSearch`);
            onSearch(value);
            const inputDOM: HTMLInputElement = inputRef.current!;
            if (inputDOM) {
              inputDOM.blur();
            }
          }
        }}
        maxLength={maxLength || 9999999999999}
        onChange={(e) => {
          log('onChange');
          const inputValue = e.currentTarget.value;
          if (maxLength === 0) {
            onChange(inputValue);
            setValue(inputValue);
            return;
          }
          if (inputValue.length <= maxLength) {
            onChange(inputValue);
            setValue(inputValue);
          }
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

SearchBar.displayName = 'SearchBar';
export default withError(SearchBar);
