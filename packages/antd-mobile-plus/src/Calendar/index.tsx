import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import {
  BaseCalendarType,
  CalendarPoppableProps,
  CalendarRangeProps,
  CalendarMultipleProps,
} from './PropsType';
import CalendarPanel from './CalendarPanel';

const prefixCls = 'alita-calendar';

function Calendar(props: BaseCalendarType): React.ReactElement<any, any> | null;
function Calendar(
  props: CalendarPoppableProps,
): React.ReactElement<any, any> | null;
function Calendar(
  props: CalendarRangeProps,
): React.ReactElement<any, any> | null;

function Calendar(
  props: CalendarMultipleProps,
): React.ReactElement<any, any> | null;

function Calendar(props: any): React.ReactElement<any, any> | null {
  const log = useTracker(Calendar.displayName, {});
  return <CalendarPanel {...props}></CalendarPanel>;
}

Calendar.displayName = 'Calendar';
export default withError(Calendar);
