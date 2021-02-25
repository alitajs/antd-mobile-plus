import React, { FC } from "react";
import { Signature } from "@alitajs/antd-mobile-plus";

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  return (
    <div>
      <Signature
        getSigin={(imgStr: string, sinRef) => {
          console.log("获取签名:" + imgStr);
        }}
        penColor="green"
      />
    </div>
  );
};

export default Demo;
