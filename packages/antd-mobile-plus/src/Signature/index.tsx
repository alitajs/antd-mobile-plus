import React, { FC, useRef } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import CanvasDraw from 'react-canvas-draw';
import { SignatureType } from './PropsType';
import './index.less';

const prefixCls = 'alita-signature';

const Signature: FC<SignatureType> = (props) => {
  const {
    footerNode,
    penColor = '#000',
    brushRadius = 3,
    canvasWidth = '100%',
    canvasHeight = '100%',
    clear = () => {},
    type = 'image/png',
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
      log('clear');
    }
  };
  return (
    <div className={prefixCls}>
      <CanvasDraw
        loadTimeOffset={0}
        hideGrid={true}
        lazyRadius={0}
        brushRadius={brushRadius}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        brushColor={penColor}
        hideInterface={true}
        ref={(ref: any) => {
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
              log('getSigin');
              getSigin(
                (sinRef as any).canvas.drawing.toDataURL(type, encoderOptions),
              );
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

Signature.displayName = 'Signature';
export default withError(Signature);
