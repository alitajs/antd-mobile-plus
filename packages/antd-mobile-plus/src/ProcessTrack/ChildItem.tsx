/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from "react";
import { IMGSTR } from "./img/index";
import "./index.less";
interface ChildItem {
  linkMap: any[]; // 对应要展示的字段数组
  cTimeKey?: string; // 表头的时间值的字段名
  tNameKey?: string; // 流程节点标题的字段名
  index: number;
  item: any; // 流程数据
  down: boolean; // 默认是展开还是合并
  log: (ext: any) => void; // 埋点
  call: () => void; // 拨打电话，和原生交互
}
let phone = "";
const prefixCls = "alita-track";
const ChildItem: React.FC<ChildItem> = (props) => {
  const {
    index,
    linkMap,
    cTimeKey = "createTime",
    tNameKey = "traceName",
    item,
    down,
    log,
    call = null,
  } = props;
  const {
    lastIcon,
    callIcon,
    downIcon,
    upIcon,
    firstIcon,
    normalIcon,
  } = IMGSTR;

  const [openFlag, updateFlag] = useState(down);

  return (
    <div className={`${prefixCls}-node`}>
      <img
        src={index === 0 ? firstIcon : normalIcon}
        className={`${prefixCls}-node-img`}
      />
      <div className={`${prefixCls}-node-time`}>
        {cTimeKey}
        <img
          src={lastIcon}
          alt=""
          className={`${prefixCls}-last-icon`}
          hidden={index !== 0}
        />
      </div>
      <div className={`${prefixCls}-child`}>
        <div className={`${prefixCls}-child-block`}>
          <div className={`${prefixCls}-child-title`}>{tNameKey}</div>

          <img
            src={openFlag ? upIcon : downIcon}
            alt=""
            onClick={() => {
              updateFlag(!openFlag);
              log("ProcessTrack");
            }}
            className={`${prefixCls}-change-icon`}
          />
        </div>

        {openFlag ? (
          <>
            {linkMap.map((childItem: any) => {
              const { key, label, isPhone = false } = childItem;
              if (isPhone) {
                phone = item[key];
              }
              return (
                <div className={`${prefixCls}-child-content`} key={key}>
                  <div className={`${prefixCls}-child-label`}>{label}：</div>
                  <div
                    className={
                      item[key]
                        ? `${prefixCls}-child-value`
                        : `${prefixCls}-hide`
                    }
                    onClick={isPhone && call}
                  >
                    {item[key]}
                    <img
                      src={callIcon}
                      hidden={!isPhone}
                      className={`${prefixCls}-phone-icon`}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChildItem;
