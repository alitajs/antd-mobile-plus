import React, { FC, useRef } from 'react';
import { withError } from '@alitajs/tracker';
import { ScrollToAnchorType } from '../../PropsType';
import { useScrollEnd } from '../../Utils/Scroll';

interface AnchorViewItemType {
  /**
   * @description 唯一值
   */
  id: string;

  /**
   * @description 列表索引项
   */
  index: number;

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
  scrollElement: ScrollToAnchorType['scrollElement'];

  /**
   * @description 数据id前缀, 同时有多个组件是使用,防止id重复
   * @default `anchor-id`
   */
  idPrefix?: ScrollToAnchorType['idPrefix'];

  /**
   * @description 偏移量  nav为绝对定位时使用
   */
   offset?: number;
}

const prefixCls = 'alita-anchor-view-item';

const AnchorViewItem: FC<AnchorViewItemType> = ({
  id,
  index,
  data = [],
  children,
  onScrollIndex,
  scrollElement,
  idPrefix,
  offset = 0
}) => {
  const ref = useRef(null);
  const didScrollToIndex = (scIndex?: number) => {
    onScrollIndex && onScrollIndex(scIndex ?? index, data[index]);
  };

  const binaryIndex = () => {
    const ele: HTMLDivElement = ref.current!;
    const { length } = data;
    if (length <= 1) {
      didScrollToIndex();
      return;
    }

    const scrollRectTop: number = (scrollElement ??
      (document.documentElement || document.body))!.offsetTop;
    const rect: DOMRect = ele.getBoundingClientRect();
    const rectTop: number = rect.top - scrollRectTop + offset;

    if (length === index + 1) {
      // 最后一个
      if (rectTop < 0) {
        didScrollToIndex(index);
      }
      return;
    }
    const nextRectTop: number =
      document
        .querySelector(`#${idPrefix}${data[index + 1].id}`)!
        .getBoundingClientRect().top - scrollRectTop;
    if (nextRectTop > 0 && rectTop <= 0) {
      didScrollToIndex(index + 1);
    } else if (index === 0) {
      didScrollToIndex(0);
    }
  };

  useScrollEnd(binaryIndex, scrollElement);
  return (
    <div className={prefixCls} id={`${idPrefix}${id}`} ref={ref}>
      {children}
    </div>
  );
};

AnchorViewItem.displayName = 'AnchorViewItem';
export default withError(AnchorViewItem);
