import React, { useState, FC, useRef, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import FilterItem from './component/FilterItem';
import { FilterProps, FilterItemProps } from './PropsType';
import { useClickAway } from 'ahooks';
import Popup from '../Popup/index';
import './index.less';

const prefixCls = 'alita-filter';

export const FilterItems: FC<FilterProps> = (props) => {
  const {
    data = [],
    defalutSelect = 0,
    alias = { label: 'label', id: 'id' },
    onItemChange,
  } = props;
  const [activeIndex, updateActiveIndex] = useState(-1);
  const [drawOpen, updateDrawOpen] = useState("up");
  const [drawData, updateDrawDate] = useState([]);
  const log = useTracker(FilterItems.displayName, {});
  const myFilter = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-single`]: data.length === 1,
  });
  const aliasObj = { label: 'label', id: 'id' };
  Object.keys(alias).forEach((aliasItem) => {
    aliasObj[aliasItem] = alias[aliasItem];
  });
  const filterRef = useRef(null);
  const awayRef = useRef(null);
  const [activeObj, updateActiveObj] = useState({});
  const [acFilterId, updateAcFilterId] = useState("");
  const [selectObj, updateSelectObj] = useState({});;

  return (
    <div className={myFilter} ref={awayRef}>
      <div className={`${prefixCls}-content`}>
        {data.map((item: FilterItemProps, index: number) => {
          const { filterId } = item;
          return (
            <FilterItem
              key={filterId}
              activeFilterId={acFilterId}
              filterId={filterId}
              aliasObj={aliasObj}
              selectObj={activeObj}
              initObj={item.data[defalutSelect]}
              openFlag={index === activeIndex ? 'down' : 'up'}
              onClick={(options: string, selectObj) => {
                log(options);
                if (options === 'down') {
                  updateActiveIndex(index);
                } else {
                  updateActiveIndex(-1);
                }
                updateDrawOpen(options);
                updateDrawDate((item as any).data);
                updateSelectObj(selectObj);
              }}
            />
          );
        })}
      </div>

      <Popup
        awayRef={awayRef}
        show={drawOpen === 'down'}
        onClose={() => {
          updateDrawOpen('up');
          log('close');
        }}
      >
        <div>
          {drawData.map((child) => {
            return (
              <div
                key={child[aliasObj.id]}
                className={classnames({
                  [`${prefixCls}-drawer-item`]: true,
                  [`${prefixCls}-drawer-item-active`]:
                    selectObj[aliasObj.id] === child[aliasObj.id],
                })}
                onClick={() => {
                  updateAcFilterId(data[activeIndex].filterId);
                  updateActiveObj(child);
                  onItemChange({
                    data: child,
                    filterId: data[activeIndex].filterId,
                  });
                  updateDrawOpen("up");
                  updateActiveIndex(-1);
                  log("onItemChange");
                }}
              >
                {child[aliasObj.label]}
              </div>
            );
          })}
        </div>
      </Popup>
    </div>
  );
};

FilterItems.displayName = 'FilterItems';
export default withError(FilterItems);
