import React, { FC, useState, useCallback } from 'react';
import { LevelView } from '@alitajs/antd-mobile-plus';
import { listData, data } from './data';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const [selectId, setSelectId] = useState('01');
  return (
    <div>
      <LevelView
        title="审批人"
        btnText="发起申诉"
        selectId={selectId}
        data={data}
        onSelect={(e) => setSelectId(e.value)}
      />
      <div style={{ height: '0.2rem' }}></div>
      <LevelView
        title="变更轨迹"
        btnText="发起申诉"
        selectId={'01'}
        data={listData}
        showFooter={false}
      />
    </div>
  );
};

export default Demo;
