import React, { FC, useRef } from "react";
import { Signature } from "@alitajs/antd-mobile-plus";

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  let myRef = useRef(null);
  const getImg = () => {
    if(myRef){
 // 获取签名图片
 console.log('图片：'+(myRef as any).canvas.drawing.toDataURL())
    }

  };
  return (
    <div style={{ height: "100vh" }}>
      <Signature
        getSigin={(imgStr: string) => {
          console.log("获取签名:" + imgStr);
        }}
        penColor="green"
        getCanvasRef={(ref: React.MutableRefObject<null>) => {
          myRef = ref;
        }}
      />
    </div>
  );
};

export default Demo;
