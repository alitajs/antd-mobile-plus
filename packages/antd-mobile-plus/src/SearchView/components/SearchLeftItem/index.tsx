/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-22 17:11:50
 */
import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import './index.less';

interface SearchLeftItemProps {
  /**
   * 显示文字内容
   */
  text?: string;
  /**
   * @description 是否展开
   * @default false
   */
  isOpen?: boolean;

  /**
   * @description 点击事件
   */
  onClick?: () => void;

  /**
   * @description 是否隐藏
   */
  hidden?: boolean;
}
const prefixCls = 'alita-search-left';
const SearchLeftItem: FC<SearchLeftItemProps> = ({
  text = '',
  isOpen = false,
  onClick = () => {},
  hidden = true,
}) => {
  const log = useTracker(SearchLeftItem.displayName, {});
  return (
    <div
      className={classnames({
        [`${prefixCls}`]: true,
        [`${prefixCls}-hide`]: hidden,
      })}
      onClick={() => {
        onClick();
        log('onClick');
      }}
    >
      <span className={`${prefixCls}-text`}>{text}</span>
      <i
        className={classnames(`${prefixCls}-icon`, {
          [`${prefixCls}-icon-open`]: isOpen,
        })}
      ></i>
    </div>
  );
};

SearchLeftItem.displayName = 'SearchLeftItem';

export default withError(SearchLeftItem);
