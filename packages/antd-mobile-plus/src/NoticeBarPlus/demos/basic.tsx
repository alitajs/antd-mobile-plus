/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-03-25 15:43:17
 */
import * as React from "react";
import { setTracker } from "@alitajs/tracker";
import { NoticeBarPlus } from "@alitajs/antd-mobile-plus";

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
    <div style={{ margin: "24px 12px" }}>
      <NoticeBarPlus
        data={[
          { bulletinTitle: "公告通知1", id: "0" },
          { bulletinTitle: "公告通知2", id: "1" },
          {
            bulletinTitle:
              "公告通知3公告通知3公告通知3测试长度超过宽度显示隐藏",
            id: "2",
          },
          { bulletinTitle: "公告通知4", id: "3" },
        ]}
        autoplay={true}
        infinite={true}
      />

      <div style={{ marginTop: "24px" }}>
        <NoticeBarPlus data={[]} autoplay={true} infinite={true} />
      </div>
    </div>
  );
};
