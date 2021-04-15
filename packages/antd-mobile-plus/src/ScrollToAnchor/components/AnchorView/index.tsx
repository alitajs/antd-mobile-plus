import React, { FC, CSSProperties } from 'react';
import { withError } from '@alitajs/tracker';
import classnames from 'classnames';
import AnchorViewItem from '../AnchorViewItem';
import { AnchorItemType } from '../../PropsType';
import { useMouseMoveAway } from '../../Utils/Scroll';

export interface AnchorViewType {
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

  [key: string]: any;
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
}: any) => {
  // 其实ahooks中已经实现了该方法，后续替换掉:`import { useMouse } from 'ahooks';`
  useMouseMoveAway(onTouchStart);
  return (
    <div
      style={style}
      className={classnames(prefixCls, {
        [`${className}`]: !!className,
      })}
      onTouchStart={onTouchStart}
    >
      {data.map((item: AnchorItemType, index: number) => {
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
