/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-23 16:04:39
 */
import * as React from "react";
import { withError, useTracker } from "@alitajs/tracker";
import classnames from "classnames";
import { FilterItemProps, FilterItemsProps } from "../../PropsType";
import "./index.less";

const prefixCls = "alita-filter-item";

export const FilterItem: React.FC<FilterItemsProps> = (props) => {
  const {
    item,
    openFlag = "up",
    onClick,
    defalutSelect = 0,
    alias = { label: "label", id: "id" },
    onItemChange,
  } = props;
  const { data = [], filterId } = item as FilterItemProps;
  const [status, updateStatus] = React.useState(openFlag);
  const [active, updateActive] = React.useState(defalutSelect);

  React.useEffect(() => {
    updateStatus(openFlag);
  }, [openFlag]);

  const log = useTracker(FilterItem.displayName, {});
  const aliasObj = { label: "label", id: "id" };
  Object.keys(alias).forEach((aliasItem) => {
    aliasObj[aliasItem] = alias[aliasItem];
  });

  return (
    <div className={`${prefixCls}`}>
      <div
        className={`${prefixCls}-content`}
        onClick={(event) => {
          if (status === "up") {
            updateStatus("down");
            onClick("down");
            event.stopPropagation();
          } else {
            updateStatus("up");
            onClick("up");
          }
        }}
      >
        <div className={`${prefixCls}-active-text `}>
          {data[active][aliasObj.label]}
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
export default withError(FilterItem);
