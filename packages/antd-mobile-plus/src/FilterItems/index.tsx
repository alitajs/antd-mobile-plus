import React, { useState, FC, useRef } from "react";
import { withError, useTracker } from "@alitajs/tracker";
import classnames from "classnames";
import FilterItem from "./component/FilterItem";
import { FilterProps, FilterItemProps } from "./PropsType";
import Popup from "../Popup/index";
import "./index.less";

const prefixCls = "alita-filter";

export const FilterItems: FC<FilterProps> = (props) => {
  const {
    data = [],
    defalutSelect = 0,
    alias = { label: "label", id: "id" },
    onItemChange,
    scrollElement,
  } = props;
  const [activeIndex, updateActiveIndex] = useState(-1);
  const [drawOpen, updateDrawOpen] = useState("up");
  const [drawData, updateDrawDate] = useState([]);
  const log = useTracker(FilterItems.displayName, {});
  const myFilter = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-single`]: data.length === 1,
  });
  const aliasObj = { label: "label", id: "id" };
  Object.keys(alias).forEach((aliasItem) => {
    aliasObj[aliasItem] = alias[aliasItem];
  });
  const awayRef = useRef(null);
  const [activeObj, updateActiveObj] = useState({});
  const [acFilterId, updateAcFilterId] = useState("");
  const [selectObj, updateSelectObj] = useState({});

  return (
    <div className={myFilter}>
      <div className={`${prefixCls}-content`} ref={awayRef}>
        {data.map((item: FilterItemProps, index: number) => {
          const { filterId, defaluText } = item;
          return (
            <FilterItem
              key={filterId}
              defaluText={defaluText}
              activeFilterId={acFilterId}
              filterId={filterId}
              aliasObj={aliasObj}
              selectObj={activeObj}
              initObj={item.data[defalutSelect]}
              openFlag={index === activeIndex ? "down" : "up"}
              onClick={(options: string, selectObj) => {
                log(options);
                if (options === "down") {
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
        scrollElement={scrollElement}
        awayRef={awayRef}
        show={drawOpen === "down"}
        closeOnClickOutside={true}
        mode="dropdown"
        type="relative"
        onClose={() => {
          updateDrawOpen("up");
          updateActiveIndex(-1);
          log("close");
        }}
      >
        <div className={`${prefixCls}-popwrapper`}>
          {drawData.map((child: any) => {
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

FilterItems.displayName = "FilterItems";
export default withError(FilterItems);
