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
    <div>
      <Score />
    </div>
  );
};

export default ScoreDemo;
