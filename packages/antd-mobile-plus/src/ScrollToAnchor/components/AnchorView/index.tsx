import React, { FC, CSSProperties } from 'react';
import { withError } from '@alitajs/tracker';
import classnames from 'classnames';
import AnchorViewItem from '../AnchorViewItem';
import { ScrollToAnchorType, AnchorItemType } from '../../PropsType';

interface AnchorViewBasicProps {
  /**
   * @description 数据源
   */
  data: ScrollToAnchorType['data'];
  /**
   * @description 滚动到索引回调
   */
  onScrollIndex: ScrollToAnchorType['onScrollIndex'];
  /**
   * @description 滚动区域
   * @default document.documentElement | document.body
   */
  scrollElement?: ScrollToAnchorType['scrollElement'];
  /**
   * @description 点击事件
   */
  onTouchStart?: () => void;

  /**
   * @description 数据id前缀, 同时有多个组件是使用,防止id重复
   * @default `anchor-id`
   */
  idPrefix?: ScrollToAnchorType['idPrefix'];
}
export interface AnchorViewType extends AnchorViewBasicProps {
  /**
   * @description 容器`class`样式
   */
  className?: string;
  /**
   * @description 容器样式
   * @default -
   */
  style?: CSSProperties;
  /**
   * @description 渲染每项
   * @default -
   */
  onRenderItem: (item: AnchorItemType) => React.ReactNode;
}

const prefixCls = 'alita-anchor-view';
const AnchorView: FC<AnchorViewType> = ({
  className,
  data,
  style,
  onRenderItem,
  onScrollIndex,
  scrollElement,
  children,
  onTouchStart,
  idPrefix,
}) => {
  return (
    <div
      style={style}
      className={classnames(prefixCls, {
        [`${className}`]: !!className,
      })}
      onTouchStart={onTouchStart}
      onMouseMove={onTouchStart}
    >
      {data.map((item, index) => {
        return onRenderItem ? (
          <AnchorViewItem
            idPrefix={idPrefix}
            id={item.id}
            key={item.id}
            index={index}
            data={data}
            scrollElement={scrollElement}
            onScrollIndex={() => {
              onScrollIndex && onScrollIndex(index, item);
            }}
          >
            {onRenderItem && onRenderItem(item)}
          </AnchorViewItem>
        ) : (
          <></>
        );
      })}
      {children}
    </div>
  );
};

AnchorView.displayName = 'AnchorView';
export default withError(AnchorView);
