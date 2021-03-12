import React, { FC } from "react";
import { withError, useTracker } from "@alitajs/tracker";
import { CardFooterType } from "../../PropsType";
import "./index.less";

const prefixCls = "alita-card-footer";

const CardFooter: FC<CardFooterType> = (props) => {
  const { type, onClick, children, btnText } = props;
  const log = useTracker(CardFooter.displayName, {});
  return (
    <div className={prefixCls}>
      {type && type === "details" ? (
        <div
          className={`${prefixCls}-details`}
          onClick={() => {
            log("footer-click");
            if (onClick) {
              onClick();
            }
          }}
        >
          查看更多 <i className={`${prefixCls}-icon-right`}></i>
        </div>
      ) : (
        ""
      )}
      {type && type === "btn" ? (
        <div
          className={`${prefixCls}-btn`}
          onClick={() => {
            log("footer-btnClick");
            if (onClick) {
              onClick();
            }
          }}
        >
          <span className={`${prefixCls}-btn-text`}>{btnText}</span>
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  );
};

CardFooter.displayName = "CardFooter";
export default withError(CardFooter);
