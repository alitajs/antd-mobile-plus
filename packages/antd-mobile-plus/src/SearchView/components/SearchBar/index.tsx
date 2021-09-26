import React, { FC, useState, useRef, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import CSSTransition from 'react-transition-group/CSSTransition';
import classNames from 'classnames';
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

  /**
   * @description 是否展示取消按钮
   * @default false
   */
  showCancel?: boolean;

  /**
   * @description 取消按钮文字
   * @default 取消
   */
  cancelText?: string;

  /**
   * @description 取消按钮回调
   * @default -
   */
  onCancel?: () => void;

  /**
   * @description 输入框内容
   * @default 
   */
  value?: string;
}

const prefixCls = 'alita-search-bar';

const SearchBar: FC<SearchBarProps> = ({
  initalzeValue = '',
  value: uValue,
  onSearch = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  maxLength = 0,
  placeholder,
  type = 'text',
  showCancel = false,
  cancelText = '取消',
  onCancel = () => {},
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [display, setDisplay] = useState('none');
  const [showCancelBtn, setShowCancelBtn] = useState(false);
  const [value, setValue] = useState(() => {
    if (maxLength === 0 || maxLength >= initalzeValue.length) {
      return initalzeValue;
    } else if (maxLength < initalzeValue.length) {
      return initalzeValue.substring(0, maxLength);
    }
    return '';
  });

  useEffect(() => {
    if (showCancelBtn) {
      setDisplay('block');
    }
  }, [showCancelBtn]);

  useEffect(() => {
    setValue(uValue || '');
  }, [uValue])

  const log = useTracker(SearchBar.displayName, {});
  const otherProps = {
    enterkeyhint: 'search',
  };

  const Cancel = () => {
    return (
      <CSSTransition
        timeout={200}
        classNames={`${prefixCls}-cancel`}
        in={showCancelBtn && showCancel}
        unmountOnExit
        onExited={() => {
          setTimeout(() => {
            setDisplay('none');
          }, 2000);
        }}
      >
        {(state) => {
          return (
            <div
              className={`${prefixCls}-cancel-box`}
              onClick={() => {
                setShowCancelBtn(false);
                if (onCancel) {
                  onCancel();
                }
              }}
            >
              {cancelText}
            </div>
          );
        }}
      </CSSTransition>
    );
  };
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-searchview`}>
        <i className={`${prefixCls}-search`}></i>
        <input
          ref={inputRef}
          type={type}
          {...otherProps}
          className={`${prefixCls}-input`}
          value={value}
          onFocus={(e) => {
            log('onFocus');
            onFocus(e.currentTarget.value);
            setShowCancelBtn(true);
          }}
          onBlur={(e) => {
            log('onBlur');
            onBlur(e.currentTarget.value);
            // setShowCancelBtn(false);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              log(`onSearch`);
              onSearch(value);
              const inputDOM: HTMLInputElement = inputRef.current!;
              if (inputDOM) {
                inputDOM.blur();
              }
              if (!value) {
                setShowCancelBtn(false);
              }
            }
          }}
          maxLength={maxLength || Number.MAX_VALUE}
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
          {...restProps}
        />
      </div>
      <Cancel />
    </div>
  );
};

SearchBar.displayName = 'SearchBar';
export default withError(SearchBar);
