import React, { useState, FC, useRef, useEffect } from "react";
import { withError, useTracker } from "@alitajs/tracker";
import classnames from "classnames";
import FilterItem from "./component/FilterItem";
import { FilterProps, FilterItemProps } from "./PropsType";
import "./index.less";

const prefixCls = "alita-filter";

export const FilterItems: FC<FilterProps> = (props) => {
  const {
    data = [],
    defalutSelect = 0,
    alias = { label: "label", id: "id" },
    onItemChange,
  } = props;
  const [activeIndex, updateActiveIndex] = useState(-1);
  const [drawOpen, updateDrawOpen] = useState("up");
  const [drawData, updateDrawDate] = useState([{}]);
  const [maskTop, updateTop] = useState(0);

  const log = useTracker(FilterItems.displayName, {});
  const myFilter = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-single`]: data.length === 1,
  });
  const aliasObj = { label: "label", id: "id" };
  Object.keys(alias).forEach((aliasItem) => {
    aliasObj[aliasItem] = alias[aliasItem];
  });
  const filterRef = useRef(null);
  useEffect(() => {
    const { offsetTop, clientHeight } = filterRef.current as any;
    updateTop(offsetTop + clientHeight);
  }, []);
  return (
    <div className={myFilter}>
      <div className={`${prefixCls}-content`} ref={filterRef}>
        {data.map((item: FilterItemProps, index: number) => {
          const { filterId } = item;
          return (
            <FilterItem
              defalutSelect={defalutSelect}
              alias={alias}
              onItemChange={onItemChange}
              key={filterId}
              item={item}
              openFlag={index === activeIndex ? "down" : "up"}
              onClick={(options: string) => {
                log(options);
                if (options === "down") {
                  updateActiveIndex(index);
                } else {
                  updateActiveIndex(-1);
                }
                updateDrawOpen(options);
                updateDrawDate(item.data);
              }}
            />
          );
        })}
      </div>

      {drawOpen === "down" ? (
        <div className={`${prefixCls}-mask`} style={{ top: maskTop }}>
          <div className={`${prefixCls}-mask-content`}>
            {drawData.map((child) => {
              return (
                <div key={child[aliasObj.id]} className={`${prefixCls}-drawer-item`}> {child[aliasObj.label]}</div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

FilterItems.displayName = "FilterItems";
export default withError(FilterItems);
