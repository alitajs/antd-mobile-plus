import React, { FC } from 'react';
import { Card } from '@alitajs/antd-mobile-plus';
const { Header, Body, Footer } = Card;

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div style={{ padding: '0.24rem' }}>
      <Card>
        <Header
          title="执行任务"
          // thumb={<span>图标</span>}
          extra={<span>右侧自定义</span>}
        />
        <Body>
          <div
            style={{
              height: '30vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            body
          </div>
        </Body>
        <Footer
          type="fill"
          btnText="查看详情"
          onClick={() => {
            console.log('click');
          }}
        />
      </Card>

      <div style={{ padding: '24px 0' }}>
        <Card>
          <Header title="执行任务" thumb={<span>图标</span>} />
          <Body>
            <div
              style={{
                height: '30vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              body
            </div>
          </Body>
          <Footer
            type="single"
            btnText="完成任务"
            onClick={() => {
              console.log('btnclick');
            }}
          />
        </Card>
      </div>

      <div style={{ padding: '24px 0' }}>
        <Card>
          <Header title="自定义底部" />
          <Body>
            <div
              style={{
                height: '30vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              body
            </div>
          </Body>
          <Footer>
            <div style={{ textAlign: 'center' }}>我是自定义的底部</div>
          </Footer>
        </Card>
      </div>
    </div>
  );
};

export default Demo;
