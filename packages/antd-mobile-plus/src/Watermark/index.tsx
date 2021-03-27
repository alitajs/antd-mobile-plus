import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import { WatermarkType } from './PropsType';
import './index.less';

const prefixCls = 'alita-watermark';

const Watermark: FC<WatermarkType> = (props) => {
  const {
    content,
    rotation = 0,
    fontFamily = 'serif',
    fontColor = 'white',
    children,
    style,
  } = props;

  let { fontSize = 16, lineHeight = 20, gap = 50 } = props;

  if (typeof document === 'undefined') {
    return (
      <div>{children}</div>
    );
  }

  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  if (ctx === null) {
    return (
      <div>{children}</div>
    );
  }

  let { devicePixelRatio } = window;
  if (devicePixelRatio < 1) {
    devicePixelRatio = 1;
  }
  fontSize *= devicePixelRatio;
  lineHeight *= devicePixelRatio;
  gap *= devicePixelRatio;
  if (rotation < -Math.PI / 2 || rotation > Math.PI / 2) {
    throw new Error('旋转角度应该介于-PI / 2 - PI / 2之间');
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = fontColor;
  ctx.font = `${fontSize}px ${fontFamily}`;
  const contentArray = content.split('\n');
  const wMatrix: number[] = [];
  const maxWidth = Math.ceil(
    contentArray.reduce((accumulator, currentValue) => {
      const { width } = ctx.measureText(currentValue);
      wMatrix.push(width);
      if (width > accumulator) {
        return width;
      }
      return accumulator;
    }, 0),
  );
  const maxHeight = lineHeight * contentArray.length;
  const w = maxWidth + gap * 2;
  const h = maxHeight + gap * 2;
  let r = rotation;
  if (r < 0) {
    r = -rotation;
  }
  canvas.height = Math.cos(r) * h + Math.sin(r) * w;
  canvas.width = Math.cos(r) * w + Math.sin(r) * h;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-rotation);
  let startY = (canvas.height - maxHeight) / 2;
  contentArray.forEach((line, index) => {
    const startX = Math.round((canvas.width - wMatrix[index]) / 2);
    ctx.fillStyle = fontColor;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillText(
      line,
      startX - canvas.width / 2,
      startY - canvas.height / 2 + (lineHeight - fontSize) / 2,
    );
    startY += lineHeight;
  });
  const backgroundBase64 = canvas.toDataURL('image/png');

  return (
    <div className={prefixCls} style={{ ...style }}>
      {children}
      <div
        style={{
          background: `url('${backgroundBase64}') 0 0 repeat`,
          backgroundSize: `${canvas.width /
            devicePixelRatio}px ${canvas.height / devicePixelRatio}px`,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 99,
          pointerEvents: 'none',
          opacity: 0.4,
        }}
      />
    </div>
  );
};

Watermark.displayName = 'QRCode';

export default withError(Watermark);
