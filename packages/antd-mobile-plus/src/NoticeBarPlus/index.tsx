/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-20 17:04:29
 */
import * as React from "react";
import { withError, useTracker } from "@alitajs/tracker";
import { ProTrackProps } from "./PropsType";
import { IMGSTR } from "./img/index";
import "./index.less";

const prefixCls = "alita-notice-bar";

export const NoticeBarPlus: React.FC<ProTrackProps> = (props) => {
  const {
    data = [],
    valueKey = "bulletinTitle",
    onItemClick = () => {},
    extraText = "更多",
    extraClick = () => {},
    backIcon = null,
  } = props;

  const log = useTracker(NoticeBarPlus.displayName, {});
  const { barIcon } = IMGSTR;

  return (
    <div className={`${prefixCls}`}>
      <div>{backIcon ?? <img src={barIcon} alt="" className={`${prefixCls}-bar-icon`}/>}</div>
      <div
        onClick={() => {
          extraClick();
          log("extraClick");
        }}
      >
        {extraText}
      </div>
    </div>
  );
};

NoticeBarPlus.displayName = "NoticeBarPlus";
export default withError(NoticeBarPlus);
