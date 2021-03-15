import React, { FC, CSSProperties, useMemo } from 'react';
import { withError } from '@alitajs/tracker';
import { ScrollToAnchorType, AnchorItemType } from '../../PropsType';
import classnames from 'classnames';

interface AnchorNavProps {
  data: ScrollToAnchorType['data'];
  onClick?: (item: AnchorItemType, index: number) => void;
}

export interface AnchorNavType extends AnchorNavProps {
  className?: string;
  style?: CSSProperties;
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
