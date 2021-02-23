/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-18 16:50:07
 */

import * as React from "react";
import { setTracker } from "@alitajs/tracker";
import { FilterItems } from "@alitajs/antd-mobile-plus";
import "./basic.less";

export default () => {
  // 这个方法应该统一添加
  setTracker({
    log(component, params, ext) {
      console.log(component); // 组件名
      console.log(params.version); // antd-mobile 版本号
      console.log(params.reactVersion); // react 版本号
      console.log(params.type); // 内置类型，分为 RENDERED(渲染), CUSTOM(组件自定义的上报)
      // 可选，组件额外的参数，比如 Button 会额外传 params.c1={type: props.type}
      console.log(params);
      // 可选，当 params.type===CUSTOM 的时候，组件可能会传的对应的数据
      // 比如 Button 点击的时候会传 ext='OnPress1'
      console.log(ext);
    },
  });
  return (
    <div style={{ margin: "24px 0"}}>
      <FilterItems
        data={[
          { id: "1", value: "排序-不限" },
          { id: "2", value: "任务来源" },
          { id: "3", value: "全部" },
        ]}
      />

      {/* <div
        style={{
          display: "flex",
          marginTop: "24px",
          justifyContent: "space-between",
        }}
      >
        <FilterItems
          data={[
            { id: "1", value: "排序-不限" },
            { id: "2", value: "任务来源" },
            { id: "3", value: "全部" },
          ]}
          className="myFilter"
        />
        <FilterItems
          data={[
            { id: "1", value: "排序-不限" },
            { id: "2", value: "任务来源" },
            { id: "3", value: "全部" },
          ]}
        />
      </div> */}
    </div>
  );
};
