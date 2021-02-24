import React, { FC, useState } from 'react';
import { TaskPanel } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [selectId, setSelectId] = useState('011');
  return (
    <div>
      <TaskPanel
        data={[
          {
            id: '01',
            taskName: '预警任务',
            taskInfos: [
              {
                id: '011',
                label: '客户投诉',
                count: '12',
              },
              {
                id: '012',
                label: '高危',
                count: '11',
              },
              {
                id: '013',
                label: '红黄灯',
                count: '10',
              },
              {
                id: '014',
                label: '将抗毒',
                count: '9',
              },
              {
                id: '015',
                label: '欠费预警',
                count: '8',
              },
            ],
          },
          {
            id: '02',
            taskName: '日常任务',
            taskInfos: [
              {
                id: '021',
                label: '客户投诉',
                count: '12',
              },
              {
                id: '022',
                label: '高危',
                count: '11',
              },
              {
                id: '023',
                label: '红黄灯',
                count: '10',
              },
              {
                id: '024',
                label: '将抗毒',
                count: '9',
              },
              {
                id: '025',
                label: '欠费预警',
                count: '8',
              },
            ],
          },
          {
            id: '03',
            taskName: '客户任务',
            taskInfos: [
              {
                id: '031',
                label: '客户投诉',
                count: '12',
              },
              {
                id: '032',
                label: '高危',
                count: '11',
              },
              {
                id: '033',
                label: '红黄灯',
                count: '10',
              },
              {
                id: '034',
                label: '将抗毒',
                count: '9',
              },
              {
                id: '035',
                label: '欠费预警',
                count: '8',
              },
            ],
          },
        ]}
        selectId={selectId}
        onSelected={(item: { id: React.SetStateAction<string> }) => {
          setSelectId(item.id);
        }}
      />
    </div>
  );
};

export default Demo;
