import React, { FC, useState, useCallback } from 'react';
import { LevelView } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [selectId, setSelectId] = useState('01');
  const onSelect = useCallback((e) => setSelectId(e.value), [selectId]);
  return (
    <div>
      <LevelView
        title="审批人"
        btnText="发起申诉"
        selectId={selectId}
        data={[
          {
            label: '集团基础资料维护',
            value: '01',
            date: '2019-05-10',
            subLabel: '周滨',
          },
          {
            label: '集团基础资料维护',
            value: '02',
            date: '2019-05-10',
            subLabel: '周滨',
          },
          {
            label: '集团基础资料维护',
            value: '03',
            date: '2019-05-10',
            subLabel: '周滨',
          },
          {
            label: '集团基础资料维护',
            value: '04',
            date: '2019-05-10',
            subLabel: '周滨',
          },
          {
            label: '集团基础资料维护',
            value: '05',
            date: '2019-05-10',
            subLabel: '周滨',
          },
        ]}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Demo;
