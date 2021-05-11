import React, { FC, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import AnchorView, { AnchorViewType } from './components/AnchorView';
import AnchorNav, { AnchorNavType } from './components/AnchorNav';
import { ScrollToAnchorType, AnchorItemType } from './PropsType';
import { useScrollTo } from './Utils/Scroll';
import classnames from 'classnames';

const prefixCls = 'alita-scroll-to-anchor';
const TIME_OUT = 500;

export interface AnchorFC<T> extends FC<T> {
  Nav: FC<AnchorNavType>;
  Container: FC<AnchorViewType>;
}

const ScrollToAnchor: AnchorFC<ScrollToAnchorType> = ({
  children,
  scrollElement,
  data = [],
  style,
  className,
  offset = 0,
  onScrollIndex = () => {},
  idPrefix = 'anchor-id',
}) => {
  const stopListener = useRef(false);
  const log = useTracker(ScrollToAnchor.displayName, {});
  const { run } = useScrollTo();

  const onNavClick = (item: AnchorItemType, index: number) => {
    if (stopListener.current) {
      return;
    }
    onScrollIndex(index, data[index]);
    log('onScrollIndex');
    const scrollRectTop: number = (scrollElement ??
      (document.documentElement || document.body))?.scrollTop;
    const idEle: HTMLElement | null = document.querySelector(
      `#${idPrefix}${item.id}`,
    );
    if (idEle) {
      run(
        scrollElement ?? document.documentElement ?? document.body,
        idEle.getBoundingClientRect().top + scrollRectTop - (scrollElement || document.documentElement)?.offsetTop + offset,
        TIME_OUT,
        () => {
          stopListener.current = false;
        }
      );
    }
    stopListener.current = true;
  };

  const onTouchStart = () => {
    stopListener.current = false;
  };

  const scrollToIndex = (index: number, item: any) => {
    if (!stopListener.current) {
      onScrollIndex(index, item);
      log('onScrollIndex');
    }
  };

  const childs = React.Children.toArray(children);
  return (
    <div
      className={classnames(prefixCls, {
        [`${className}`]: !!className,
      })}
      style={style}
    >
      {childs.map((child) => {
        if (!React.isValidElement(child)) return;
        const props = {
          ...child.props,
          data,
          idPrefix,
        };
        const displayName = (child.type as any).displayName;
        if (displayName === 'AnchorNav') {
          props.onClick = onNavClick;
        }
        if (displayName === 'AnchorView') {
          props.onScrollIndex = scrollToIndex;
          props.scrollElement = scrollElement;
          props.onTouchStart = onTouchStart;
          props.offset = offset;
        }
        return React.cloneElement(child, props);
      })}
    </div>
  );
};

ScrollToAnchor.Nav = AnchorNav;
ScrollToAnchor.Container = AnchorView;
ScrollToAnchor.displayName = 'ScrollToAnchor';
export default withError(ScrollToAnchor);
