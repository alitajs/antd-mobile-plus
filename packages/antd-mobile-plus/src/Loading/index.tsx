/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-24 14:49:08
 */

import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import loadingSvg from './assets/loading.svg';
import { LoadingType } from './PropsType';
import './index.less';

const prefixCls = 'alita-loading';

const defaultLoadText = "数据加载中...";
const defaultLoadingStyle = <div className={`${prefixCls}-icon-spin`}><img alt="" src={loadingSvg} /></div>;

const Loading: FC<LoadingType> = (props) => {
  const {
    spinning = false,
    type,
    text,
    loadingStyle,
  } = props;

  const defaultStyle = () => {
    return <div>{text || defaultLoadText}</div>
  };

  const renderLoading = () => {
    if (loadingStyle) {
      return loadingStyle;
    } else {
      return type ? defaultStyle() : defaultLoadingStyle;
    }
  }

  return (
    <>
      {spinning ? (
        <div
          className={prefixCls}
          style={
            type === "white"
              ? { opacity: 0.6, backgroundColor: "#fff" }
              : { backgroundColor: "rgba(0, 0, 0, 0.65)" }
          }
        >
          {renderLoading()}
        </div>
      ) : null}
    </>
  );
};

Loading.displayName = 'Loading';

export default withError(Loading);
