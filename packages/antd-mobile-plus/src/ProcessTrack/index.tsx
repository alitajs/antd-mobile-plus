/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-20 15:50:29
 */
import * as React from "react";
import { withError, useTracker } from "@alitajs/tracker";
import { ProTrackProps } from "./PropsType";
import ChildItem from "./ChildItem";
import "./index.less";

const prefixCls = "alita-track";

export const ProcessTrack: React.FC<ProTrackProps> = (props) => {
  const {
    data = [],
    linkMap = [],
    cTimeKey = "",
    tNameKey = "",
    down = true,
    empty,
    call = () => {},
    keyFieldName = "id",
  } = props;

  const log = useTracker(ProcessTrack.displayName, {});

  return (
    <>
      {data && data.length
        ? data.map((item: any, index: number) => {
            return (
              <ChildItem
                key={item[keyFieldName]}
                item={item}
                index={index}
                tNameKey={item[tNameKey]}
                cTimeKey={item[cTimeKey]}
                linkMap={linkMap}
                down={down}
                log={log}
                call={call}
              />
            );
          })
        : empty || <div className={`${prefixCls}-no-data`}>暂无流程数据</div>}
    </>
  );
};

ProcessTrack.displayName = "ProcessTrack";
export default withError(ProcessTrack);
