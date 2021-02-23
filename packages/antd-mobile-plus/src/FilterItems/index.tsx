/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-22 17:29:10
 */
import * as React from "react";
import { withError, useTracker } from "@alitajs/tracker";
import classnames from "classnames";
import { ProTrackProps } from "./PropsType";
import Drawer from "antd-mobile/lib/drawer";
import "./index.less";

const prefixCls = "alita-filter";

export const FilterItems: React.FC<ProTrackProps> = (props) => {
  const {
    className = "",
    defalutSelect = 0,
    data = [],
    valueFieldName = "value",
    keyFieldName = "id",
  } = props;
  const [status, updateStatus] = React.useState("down");

  const log = useTracker(FilterItems.displayName, {});

  const myFilter = classnames(prefixCls, className);
  return (
    <>
      <div
        className={myFilter}
        onClick={() => {
          if (status === "up") {
            updateStatus("down");
          } else {
            updateStatus("up");
          }
        }}
      >
        <div>{data[defalutSelect][valueFieldName]}</div>
        <i
          className={classnames({
            [`${prefixCls}-icon-down`]: status === "down",
            [`${prefixCls}-icon-up`]: status === "up",
            [`${prefixCls}-noraml-icon`]: true,
          })}
        ></i>
      </div>
      {
        <div className={`${prefixCls}-drawer`}>
          {data.map((item: any) => {
            const { id, value } = item;
            return (
              <div key={id} className={`${prefixCls}-drawer-item`}>
                {value}
              </div>
            );
          })}
        </div>
      }
      {/* <Drawer
        className={`${prefixCls}-drawer`}
        enableDragHandle
        sidebar={sidebar}
        open={true}
        sidebarStyle={{boxShadow:'none'}}
        overlayStyle={{height:0}}
        contentStyle={{height:0}}
        position='top'
      >
        <div></div>
      </Drawer> */}
    </>
  );
};

FilterItems.displayName = "FilterItems";
export default withError(FilterItems);
