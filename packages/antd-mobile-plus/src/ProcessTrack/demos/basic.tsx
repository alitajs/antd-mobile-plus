import * as React from 'react';
import { setTracker } from '@alitajs/tracker';
import { ProcessTrack } from '@alitajs/antd-mobile-plus';

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
    <div style={{ marginTop: '24px', display: 'flex' }}>
      <ProcessTrack
        data={[
          {
            linkId: '1',
            linkName: '协议起草',
            pepple: '张一',
            phone: '15989864522',
            startTime: '2020-04-02 12:30',
            endTime: '2021-01-01 12:30',
            remarks: '暂无',
          },
          {
            linkId: '2',
            linkName: '协议审批',
            pepple: '张一',
            phone: '15989864522',
            startTime: '2020-04-02 12:30',
            endTime: '2021-01-01 12:30',
            remarks: '暂无',
          },
          {
            linkId: '3',
            linkName: '协议稽核',
            pepple: '张一',
            phone: '15989864522',
            startTime: '2020-04-02 12:30',
            endTime: '2021-01-01 12:30',
            remarks: '暂无',
          },
        ]}
        keyFieldName="linkId"
        tNameKey="linkName"
        cTimeKey="startTime"
        call={(e) => console.log(e)}
        linkMap={[
          { label: '处理人', key: 'pepple' },
          { label: '联系电话', key: 'phone', isPhone: true },
          { label: '环节开始时间', key: 'startTime' },
          { label: '环节结束时间', key: 'endTime' },
          { label: '备注', key: 'remarks' },
        ]}
        empty={<>无数据</>}
      />
    </div>
  );
};
