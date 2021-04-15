import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import AntdCard from "antd-mobile/lib/card";
import { SimpleCardType } from './PropsType';
import './index.less';

const SimpleCard: FC<SimpleCardType> = ({
  full,
  headerTitle,
  headerThumb,
  headerThumbStyle,
  headerExtra,
  children,
  footerContent,
  footerExtra,
}) => {
  return (
    <AntdCard full={!!full}>
      {
        (headerTitle !== undefined || headerThumb !== undefined || headerThumbStyle !== undefined || headerExtra !== undefined)
        && <AntdCard.Header
          title={headerTitle}
          thumb={headerThumb}
          thumbStyle={headerThumbStyle}
          extra={headerExtra}
        />
      }
      {
        children !== undefined
        && <AntdCard.Body>
          {children}
        </AntdCard.Body>
      }
      {
        (footerContent !== undefined || headerExtra !== undefined)
        && <AntdCard.Footer content={footerContent} extra={footerExtra} />
      }
    </AntdCard>
  );
}

SimpleCard.displayName = 'SimpleCard';

export default withError(SimpleCard);
