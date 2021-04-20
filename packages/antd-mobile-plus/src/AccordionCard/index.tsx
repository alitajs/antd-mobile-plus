import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { withError, useTracker } from '@alitajs/tracker';
import { AccordionCardType } from './PropsType';
import ExpandView from './components/ExpandView';
import './index.less';

const prefixCls = 'alita-accordioncard';
const AccordionCard: FC<AccordionCardType> = (props) => {
  const { children, isExtand, onChange } = props;
  const [display, setDisplay] = useState('block');
  const log = useTracker(AccordionCard.displayName, {});
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-header`}></div>
      <div style={{ overflow: 'hidden' }}>
        <CSSTransition
          in={isExtand}
          classNames={`${prefixCls}-body`}
          timeout={200}
          onExited={() => {}}
          onEntered={() => {}}
        >
          <div className={`${prefixCls}-body`}>{children}</div>
        </CSSTransition>
        <ExpandView isExtand={isExtand} onChange={onChange} />
      </div>
    </div>
  );
};

AccordionCard.displayName = 'AccordionCard';
export default withError(AccordionCard);
