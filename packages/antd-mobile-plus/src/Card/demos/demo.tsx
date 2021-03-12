import React, { FC } from "react";
import { Card } from "@alitajs/antd-mobile-plus";
const { CardHeader, CardBody, CardFooter } = Card;

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <CardHeader
          title="执行任务"
          // thumb={<span>图标</span>}
          extra={<span>右侧自定义</span>}
        />
        <CardBody>
          <div
            style={{
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            body
          </div>
        </CardBody>
        <CardFooter
          type="fill"
          onClick={() => {
            console.log("click");
          }}
        />
      </Card>

      <div style={{ padding: "24px 0" }}>
        <Card>
          <CardHeader title="执行任务" thumb={<span>图标</span>} />
          <CardBody>
            <div
              style={{
                height: "30vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              body
            </div>
          </CardBody>
          <CardFooter
            type="single"
            btnText="完成任务"
            onClick={() => {
              console.log("btnclick");
            }}
          />
        </Card>
      </div>

      <div style={{ padding: "24px 0" }}>
        <Card>
          <CardHeader title="自定义底部" />
          <CardBody>
            <div
              style={{
                height: "30vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              body
            </div>
          </CardBody>
          <CardFooter>
            <div style={{ textAlign: "center" }}>我是自定义的底部</div>
          </CardFooter>
        </Card>
      </div>

    </div>
  );
};

export default Demo;
