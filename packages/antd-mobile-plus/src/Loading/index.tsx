import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import classnames from 'classnames';
import { LoadingType } from './PropsType';
import './index.less';

const prefixCls = 'alita-loading';

const defaultLoadText = "数据加载中...";
const defaultLoadingStyle = <div className={`${prefixCls}-icon-spin`}><i className={classnames(`${prefixCls}-icon`, `${prefixCls}-icon-loading`)}></i></div>;

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
