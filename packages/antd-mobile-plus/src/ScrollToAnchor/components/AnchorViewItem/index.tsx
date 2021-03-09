import React, { FC, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { ScrollToAnchorType } from '../../PropsType';
import { useScroll, useDebounceEffect, useLockFn } from 'ahooks';
import './index.less';

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
  scrollElement?: ScrollToAnchorType['scrollElement'];

  /**
   * @description 数据id前缀, 同时有多个组件是使用,防止id重复
   * @default `anchor-id`
   */
  idPrefix?: ScrollToAnchorType['idPrefix'];
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
}) => {
  const position = useScroll(scrollElement);
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
    const rectTop: number = rect.top - scrollRectTop;

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
  useDebounceEffect(binaryIndex, [`${position.top}`], {
    wait: 50,
  });

  return (
    <div className={prefixCls} id={`${idPrefix}${id}`} ref={ref}>
      {children}
    </div>
  );
};

AnchorViewItem.displayName = 'AnchorViewItem';
export default withError(AnchorViewItem);
