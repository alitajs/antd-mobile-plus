/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-18 16:50:07
 */

import React, { FC, useState } from 'react';
import { Star } from '@alitajs/antd-mobile-plus';

interface StarDemoProps { }

const StarDemo: FC<StarDemoProps> = (props) => {
  const [score, setScore] = useState(6);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '100px',
      }}
    >
      可编辑
      <Star score={score} maxScore={6} onChange={(n: number) => setScore(n)} />
      纯展示
      <Star score={5} />
      <Star score={4.5} />
      <Star score={4} />
      <Star score={3.5} />
      <Star score={3} />
      <Star score={2.5} />
      <Star score={2} />
      <Star score={1.5} />
      <Star score={1} />
      <Star score={0.5} />
      <Star score={0} />
    </div>
  );
};

export default StarDemo;
