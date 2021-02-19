/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-18 16:50:07
 */

import React, { FC } from 'react';
import { Score } from '@alitajs/antd-mobile-plus';

interface ScoreDemoProps {}

const ScoreDemo: FC<ScoreDemoProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '100px',
      }}
    >
      <Score score={6} />
      <Score score={5} />
      <Score score={4.5} />
      <Score score={4} />
      <Score score={3.5} />
      <Score score={3} />
      <Score score={2.5} />
      <Score score={2} />
      <Score score={1.5} />
      <Score score={1} />
      <Score score={0.5} />
      <Score score={0} />
    </div>
  );
};

export default ScoreDemo;
