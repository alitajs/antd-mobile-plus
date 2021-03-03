import * as React from 'react';
import ACalendar from 'antd-mobile/lib/calendar';
import { withError, useTracker } from '@alitajs/tracker';
import { CalendarPropsType } from './PropsType';
import './index.less';

export const Calendar: React.FC<CalendarPropsType> = (props) => {
  const {
    onCancel,
    onConfirm,
    onSelect,
    onSelectHasDisableDate,
    ext,
    ...other
  } = props;

  const log = useTracker(Calendar.displayName, {
    ext,
  });

  return (
    <ACalendar
      {...other}
      onCancel={() => {
        onCancel && onCancel();
        log('onCancel');
      }}
      onConfirm={(e) => {
        onConfirm && onConfirm(e);
        log('onConfirm');
      }}
      onSelect={(e) => {
        onSelect && onSelect(e);
        log('onSelect');
      }}
      onSelectHasDisableDate={(e) => {
        onSelectHasDisableDate && onSelectHasDisableDate(e);
        log('onSelectHasDisableDate');
      }}
    ></ACalendar>
  );
};

Calendar.displayName = 'Calendar';

export default withError(Calendar);
