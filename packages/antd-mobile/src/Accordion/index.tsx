import * as React from 'react';
import AAccordion from 'antd-mobile/lib/accordion';
import { withError, useTracker } from '@alitajs/tracker';
import { AccordionPropsType } from './PropsType';
import './index.less';

interface AccordionFC<T> extends React.FC<T> {
  Panel?: any;
}

export const Accordion: AccordionFC<AccordionPropsType> = (props) => {
  const { onChange, ext, ...other } = props;

  const log = useTracker(Accordion.displayName, {
    ext,
  });

  return (
    <AAccordion
      {...other}
      onChange={(e) => {
        onChange && onChange(e);
        log('onChange');
      }}
    ></AAccordion>
  );
};

Accordion.Panel = AAccordion.Panel;
Accordion.displayName = 'Accordion';

export default withError(Accordion);
