/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-20 17:04:29
 */
import * as React from "react";
import { withError, useTracker } from "@alitajs/tracker";
import { ProTrackProps } from "./PropsType";
import { IMGSTR } from "./img/index";
import Carousel from "antd-mobile/lib/carousel";
import "./index.less";

const prefixCls = "alita-notice-bar";

export const NoticeBarPlus: React.FC<ProTrackProps> = (props) => {
  const {
    data = [],
    valueKey = "bulletinTitle",
    onItemClick = () => {},
    extraText = "更多",
    onExtraClick = () => {},
    autoplayInterval = 3000,
    noticeIcon = null,
    autoplay = true,
    infinite = true,
    keyFieldName = "id",
  } = props;

  const log = useTracker(NoticeBarPlus.displayName, {});
  const { barIcon } = IMGSTR;

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-bar-content`}>
        {noticeIcon ?? (
          <img src={barIcon} alt="" className={`${prefixCls}-bar-icon`} />
        )}
        <Carousel
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplayInterval={autoplayInterval}
          autoplay={autoplay}
          infinite={infinite}
        >
          {data.map((item: any) => (
            <div
              key={item[keyFieldName]}
              className={`${prefixCls}-v-item`}
              onClick={() => {
                log("notice-bar-itemClick");
                onItemClick(item);
              }}
            >
              {item[valueKey]}
            </div>
          ))}
        </Carousel>
      </div>
      <div
        onClick={() => {
          onExtraClick();
          log("onExtraClick");
        }}
      >
        <span>{extraText}</span>
        <i className={`${prefixCls}-right-icon`}></i>
      </div>
    </div>
  );
};

NoticeBarPlus.displayName = "NoticeBarPlus";
export default withError(NoticeBarPlus);
