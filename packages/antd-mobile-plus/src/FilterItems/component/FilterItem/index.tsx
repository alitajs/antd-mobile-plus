/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-03-23 10:11:23
 */
import * as React from "react";
import classnames from "classnames";
import { FilterItemsProps } from "../../PropsType";
import "./index.less";

const prefixCls = "alita-filter-item";

export const FilterItem: React.FC<FilterItemsProps> = (props) => {
  const {
    openFlag = "up",
    onClick,
    selectObj = {},
    aliasObj = { label: "label", id: "id" },
    activeFilterId,
    filterId,
    initObj = {},
    defaluText,
  } = props;
  const [status, updateStatus] = React.useState(openFlag);
  const [currentObj, updateCurrentObj] = React.useState(initObj);
  const [myDefaluText, updateText] = React.useState(defaluText);

  React.useEffect(() => {
    updateStatus(openFlag);
    if (activeFilterId === filterId) {
      if (JSON.stringify(selectObj) !== "{}") {
        updateText("");
        updateCurrentObj(selectObj);
      }
    }
  }, [openFlag]);

  return (
    <div className={`${prefixCls}`}>
      <div
        className={`${prefixCls}-content`}
        onClick={() => {
          if (status === "up") {
            updateStatus("down");
            onClick("down", currentObj);
          } else {
            updateStatus("up");
            onClick("up", currentObj);
          }
        }}
      >
        <div className={`${prefixCls}-active-text `}>
          {myDefaluText || currentObj[(aliasObj as any).label]}
        </div>
        <i
          className={classnames({
            [`${prefixCls}-icon-down`]: status === "down",
            [`${prefixCls}-icon-up`]: status === "up",
            [`${prefixCls}-noraml-icon`]: true,
          })}
        ></i>
      </div>
    </div>
  );
};

FilterItem.displayName = "FilterItem";
export default FilterItem;
