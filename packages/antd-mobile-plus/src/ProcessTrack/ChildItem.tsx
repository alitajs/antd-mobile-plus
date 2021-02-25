/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from "react";
import { IMGSTR } from "./img/index";
import "./index.less";
interface ChildItem {
  /**
   * @description 对应流程中要展示的字段数组
   */
  linkMap: any[];
  /**
   *@description 流程上展示时间节点的字段名
   */
  cTimeKey?: string;
  /**
   *@description 流程节点标题的字段名
   */
  tNameKey?: string;
  /**
   * @description  数量标识，用来区分是否是最后流程，需要展示不同的图标
   */
  index: number;
  /**
   * @description 每个流程节点数据
   */
  item: any;
  /**
   * @description 默认是展开还是合并,点击右侧箭头可切换
   */
  down: boolean;
  /**
   * @description 埋点
   */
  log: (ext: any) => void;
  /**
   *@description 拨打电话，和原生交互
   */
  call: () => void;
}
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
    call = () => {},
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
              return (
                <div className={`${prefixCls}-child-content`} key={key}>
                  <div className={`${prefixCls}-child-label`}>{label}：</div>
                  <div
                    className={
                      item[key]
                        ? `${prefixCls}-child-value`
                        : `${prefixCls}-hide`
                    }
                    onClick={isPhone ? call : () => {}}
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
