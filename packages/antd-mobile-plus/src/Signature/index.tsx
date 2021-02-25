import React, { FC, useRef } from "react";
import { withError, useTracker } from "@alitajs/tracker";
import SignatureCanvas from "react-signature-canvas";
import { SignatureType } from "./PropsType";
import "./index.less";

const prefixCls = "alita-signature";

const Signature: FC<SignatureType> = (props) => {
  const {
    footerNode,
    canvasProps,
    velocityFilterWeight,
    penColor,
    maxWidth = 2,
    minWidth,
    clear = () => {},
    type = "image/png",
    encoderOptions = 0.92,
    getSigin,
    getCanvasRef,
  } = props;
  const log = useTracker(Signature.displayName, {});
  let sinRef = useRef(null);
  const myClear = () => {
    if (sinRef) {
      (sinRef as any).clear();
      clear();
      log("clear");
    }
  };
  return (
    <div className={prefixCls}>
      <SignatureCanvas
        canvasProps={{
          ...canvasProps,
          className: `${prefixCls}-cavans`,
        }}
        velocityFilterWeight={velocityFilterWeight}
        penColor={penColor}
        maxWidth={maxWidth}
        minWidth={minWidth}
        ref={(ref: React.MutableRefObject<null>) => {
          sinRef = ref;
          if (getCanvasRef) {
            getCanvasRef(ref);
          }
        }}
      />
      {footerNode || (
        <div className={`${prefixCls}-foot`}>
          <div
            className={`${prefixCls}-btn`}
            onClick={() => {
              log("getSigin");
              getSigin((sinRef as any).toDataURL(type, encoderOptions), sinRef);
            }}
          >
            确定
          </div>
          <div className={`${prefixCls}-btn`} onClick={myClear}>
            清除
          </div>
        </div>
      )}
    </div>
  );
};

Signature.displayName = "Signature";
export default withError(Signature);
