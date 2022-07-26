import React, { FC } from 'react';
import { Badge } from '@alitajs/antd-mobile-plus';
import './index.less';

interface DemoProps { }

const Demo: FC<DemoProps> = (props) => {


  return (
    <div>
      <div className='warp'>
        <Badge content='5'>
          <div className="box" />
        </Badge>
        <Badge content='新'>
          <div className="box" />
        </Badge>
        <Badge content={Badge.dot}>
          <div className="box" />
        </Badge>
      </div>

      <div className='warp'>
        <Badge color='#108ee9'
          content={Badge.dot}
          style={{ '--right': '100%', '--top': '100%' }}>
          <div className="box" />
        </Badge>
        <Badge color='#87d068'
          content='999'
          style={{ '--right': '100%' }}
          >
          <div className="box" />
        </Badge>
        <Badge content={Badge.dot}>
          <div className="box" />
        </Badge>
      </div>
    </div>
  );
};

export default Demo;