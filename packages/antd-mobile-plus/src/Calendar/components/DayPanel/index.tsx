import React, { FC, useMemo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { CalendarDayItem } from '../../PropsType';
import classNames from 'classnames';
import './index.less';

interface DayPanelProps {
  color?: string;
  index?: number;
  rowHeight?: string;
  offset?: number;
  item: CalendarDayItem;
  onClick?: (item: CalendarDayItem) => void;
}

const prefixCls = 'alita-daypanel';
const DayPanel: FC<DayPanelProps> = (props) => {
  const { color, index, rowHeight, offset = 0, item, onClick } = props;
  const { type, className, bottomInfo, topInfo, text } = item;

  const style: React.CSSProperties = useMemo(() => {
    const style: React.CSSProperties = {
      height: rowHeight,
    };

    if (item.type === 'placeholder') {
      style.width = '100%';
      return style;
    }

    if (index === 0) {
      style.marginLeft = `${(100 * offset) / 7}%`;
    }

    if (color) {
      switch (item.type) {
        case 'end':
        case 'start':
        case 'start-end':
        case 'multiple-middle':
        case 'multiple-selected':
          style.background = color;
          break;
        case 'middle':
          style.color = color;
          break;
      }
    }
    return style;
  }, [rowHeight, index, item, color]);

  const onDayClick = () => {
    if (type !== 'disabled') {
      onClick && onClick(item);
    }
  };

  const renderTopInfo = () => {
    if (topInfo) {
      return (
        <div key="topInfo" className={`${prefixCls}-top-info`}>
          {topInfo}
        </div>
      );
    }
    return null;
  };

  const renderBottomInfo = () => {
    if (bottomInfo) {
      return (
        <div key="bottomInfo" className={`${prefixCls}-bottom-info`}>
          {bottomInfo}
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    const Nodes = [renderTopInfo(), text, renderBottomInfo()];

    if (type === 'selected') {
      return (
        <div
          className={`${prefixCls}-selected-day`}
          style={{
            width: rowHeight,
            height: rowHeight,
            background: color,
          }}
        >
          {Nodes}
        </div>
      );
    }
    return Nodes;
  };

  return (
    <>
      {type === 'placeholder' ? (
        <div className={prefixCls} style={style} />
      ) : (
        <div
          className={classNames(prefixCls, `${prefixCls}-${item.type}`, {
            [`${prefixCls}-${className}`]: !!className,
          })}
          style={style}
          onClick={onDayClick}
        >
          {renderContent()}
        </div>
      )}
    </>
  );
};

DayPanel.displayName = 'DayPanel';
export default withError(DayPanel);
