
import * as React from "react";
import { setTracker } from "@alitajs/tracker";
import { FilterItems } from "@alitajs/antd-mobile-plus";

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

  const data = [
    {
      data: [
        { id: "1", value: "排序不限" },
        { id: "2", value: "任务来源" },
        { id: "3", value: "全部" },
      ],
      filterId: "f_1",
    },
    {
      data: [
        { id: "1", value: "全部" },
        { id: "2", value: "任务来源" },
        { id: "3", value: "全部" },
        { id: "4", value: "排序-不限" },
        { id: "5", value: "任务来源" },
        { id: "6", value: "全部" },
        { id: "7", value: "排序-不限" },
        { id: "8", value: "任务来源" },
        { id: "9", value: "全部" },
        { id: "16", value: "全部" },
        { id: "17", value: "排序-不限" },
        { id: "18", value: "任务来源" },
        { id: "19", value: "全部" },
      ],
      filterId: "f_2",
    },
    {
      data: [
        { id: "1", value: "这个名字很长这个名字很长" },
        { id: "2", value: "任务来源" },
        { id: "3", value: "全部" },
      ],
      filterId: "f_3",
    },
  ];

  return (
    <div style={{ margin: "24px 0", height: "2000px" }}>
      <FilterItems
        data={data}
        onItemChange={(data: FilterItemProps) => {
          console.log(data);
        }}
        alias={{ label: "value" }}
      />
    </div>
  );
};
