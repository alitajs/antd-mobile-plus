import React, { FC, CSSProperties, useMemo } from 'react';
import { withError } from '@alitajs/tracker';
import { ScrollToAnchorType, AnchorItemType } from '../../PropsType';
import classnames from 'classnames';

interface AnchorNavProps {
  /**
   * @description 数据源
   */
  data: ScrollToAnchorType['data'];
  /**
   * @description 事件点击
   */
  onClick?: (item: AnchorItemType, index: number) => void;
}

export interface AnchorNavType extends AnchorNavProps {
  /**
   * @description 锚点容器className
   */
  className?: string;
  /**
   * @description 锚点容器style样式
   */
  style?: CSSProperties;
  /**
   * @description 渲染item
   */
  onRenderItem: (item: AnchorItemType) => React.ReactNode;
}

const prefixCls = 'alita-anchornav';
const AnchorNav: FC<AnchorNavType> = ({
  data,
  className,
  style,
  onRenderItem,
  onClick,
}) => {
  const scrollIndex = (index: number, item: AnchorItemType) => {
    onClick && onClick(item, index);
  };

  return (
    <div
      style={style}
      className={classnames(prefixCls, {
        [`${className}`]: !!className,
      })}
    >
      {data.map((item, index) => {
        return onRenderItem ? (
          <div
            key={item.id}
            onClick={() => {
              scrollIndex(index, item);
            }}
          >
            {onRenderItem && onRenderItem(item)}
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
};

AnchorNav.displayName = 'AnchorNav';
export default withError(AnchorNav);
