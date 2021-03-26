import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import { GradientProgressType } from './PropsType';
import './index.less';

const prefixCls = 'alita-gradient-progress';

const GradientProgress: FC<GradientProgressType> = (props) => {
  const {
    width = 30,
    height = 180,
    percent = 90,
    backgroundColor = "",
    divisionColor = "",
    linearGradient = [],
  } = props;

  const DivisionDiv = () => {
    const divisionNum = height / 3;
    const arrDivision = [];
    for (let i = 1; i < divisionNum; i += 1) {
      arrDivision.push(
        <div
          key={`Division${i}`}
          className={`${prefixCls}-division`}
          style={{ backgroundColor: divisionColor }}
        />
      );
    }
    return <div className={`${prefixCls}-division-item`}>{arrDivision}</div>;
  };

  const percentH = percent > 1 ? height * (percent / 100) : height * percent;

  return (
    <div
      className={prefixCls}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className={`${prefixCls}-content`} style={{ backgroundColor }}>
        <div
          className={`${prefixCls}-percent-item`}
          style={{
            height: `${percentH}px`,
            background: `linear-gradient(
             ${linearGradient.join()}
            )`,
          }}
        />
      </div>
      {DivisionDiv()}
    </div>
  );
};

GradientProgress.displayName = 'GradientProgress';

export default withError(GradientProgress);
