import React, { FC, useRef, useMemo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { useSize } from 'ahooks';
import classnames from 'classnames';
import { CityPickerNavType } from '../../PropsType';
import './index.less';

interface NavViewType extends CityPickerNavType {
  /**
   *  @description 点击事件选中
   */
  onClick: (toIndex: number) => void;
  /**
   * @description 选中列表
   */
  selectList: object[];
  /**
   * @description 数据别名
   */
  alias: { id: string; label: string };
}

const prefixCls = 'alita-nav-view';
const NavView: FC<NavViewType> = ({
  placeholder = [],
  selectList = [],
  alias,
  onClick,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const userPlaceholders = Array.from(placeholder)
    ? placeholder
    : [placeholder];

  const getPlaceholder = () => {
    const { length } = selectList;
    const placeholderLength = userPlaceholders.length;
    if (placeholderLength === 0) {
      return '';
    }
    return placeholderLength > length
      ? userPlaceholders[length]
      : userPlaceholders[placeholderLength - 1];
  };
  const size = useSize(navRef);
  useMemo(() => {
    const dom = navRef.current;
    if (dom) {
      dom.parentElement?.scrollTo(0, size.height || 0);
    }
  }, [size]);

  const PlaceholderView = () => (
    <div
      className={classnames({
        [`${prefixCls}-placeholder`]: true,
        [`${prefixCls}-placeholder-hiddenline`]: selectList.length === 0,
      })}
      onClick={() => {
        onClick && onClick(selectList.length - 1);
      }}
    >
      <span>{getPlaceholder()}</span>
    </div>
  );

  const StepsStep = ({ index, item = {} }: { index: number; item: object }) => {
    return (
      <div
        key={item[alias.id]}
        className={classnames({
          [`${prefixCls}-step`]: true,
          [`${prefixCls}-first`]: index === 0,
        })}
        onClick={() => {
          onClick && onClick(index - 1);
        }}
      >
        <span>{item[alias.label]}</span>
      </div>
    );
  };

  const Steps = () => {
    return (
      <>
        {selectList.map((item, index) => {
          return <StepsStep key={item[alias.id]} index={index} item={item} />;
        })}
      </>
    );
  };

  return (
    <div className={prefixCls}>
      <div ref={navRef}>
        <Steps />
        <PlaceholderView />
      </div>
    </div>
  );
};

NavView.displayName = 'NavView';
export default withError(NavView);
