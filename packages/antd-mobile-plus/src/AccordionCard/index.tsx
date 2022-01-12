import React, { FC } from 'react';
import classnames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import { withError, useTracker } from '@alitajs/tracker';
import Icon from 'antd-mobile/lib/icon';
import { AccordionCardType } from './PropsType';
import ExpandView from './components/ExpandView';
import './index.less';

const prefixCls = 'alita-accordioncard';
const AccordionCard: FC<AccordionCardType> = (props) => {
  const {
    children,
    isExtand = true,
    onChange,
    title,
    extra,
    onExited,
    onEntered,
    extandPostion = 'top',
  } = props;

  const log = useTracker(AccordionCard.displayName, {});
  return (
    <div className={prefixCls}>
      {(title || extra || extandPostion === 'top') && (
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-header-title`}>{title}</div>
          {extra}
          {extandPostion === 'top' && (
            <div
              className={`${prefixCls}-header-icon`}
              onClick={() => {
                onChange && onChange(!isExtand);
                log('onChange');
              }}
            >
              <Icon size="xxs" type={isExtand ? 'up' : 'down'} />
            </div>
          )}
        </div>
      )}
      <div style={{ overflow: 'hidden' }}>
        <CSSTransition
          in={isExtand}
          classNames={`${prefixCls}-body`}
          timeout={200}
          onExited={onExited}
          onEntered={onEntered}
        >
          {(state) => {
            return (
              <div className={`${prefixCls}-body`}>
                <div
                  className={classnames(`${prefixCls}-animation`, {
                    [`${prefixCls}-entered`]: state === 'entered',
                  })}
                >
                  {children}
                </div>
                {extandPostion === 'bottom' && (
                  <ExpandView
                    isExtand={isExtand}
                    onChange={(e: boolean) => {
                      onChange && onChange(e);
                      log('onChange');
                    }}
                  />
                )}
              </div>
            );
          }}
        </CSSTransition>
      </div>
    </div>
  );
};

AccordionCard.displayName = 'AccordionCard';
export default withError(AccordionCard);
