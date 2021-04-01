import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { CardFooterType } from '../../PropsType';
import './index.less';

const prefixCls = 'alita-card-footer';

const CardFooter: FC<CardFooterType> = (props) => {
  const { type = 'fill', onClick, children, btnText, style } = props;
  const log = useTracker(CardFooter.displayName, {});

  const FooterView = () => {
    switch (type) {
      case 'fill':
        return (
          <div
            className={`${prefixCls}-details`}
            onClick={() => {
              log('footer-click');
              if (onClick) {
                onClick();
              }
            }}
          >
            {btnText} <i className={`${prefixCls}-icon-right`}></i>
          </div>
        );
      case 'single':
        return (
          <div
            className={`${prefixCls}-btn`}
            onClick={() => {
              log('footer-btnClick');
              if (onClick) {
                onClick();
              }
            }}
          >
            <span className={`${prefixCls}-btn-text`}>{btnText}</span>
          </div>
        );
    }
  };

  return <div className={prefixCls} style={style}>{children ?? <FooterView />}</div>;
};

CardFooter.displayName = 'CardFooter';
export default withError(CardFooter);
