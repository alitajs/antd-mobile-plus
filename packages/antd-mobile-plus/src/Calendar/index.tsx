import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import {
  BaseCalendarType,
  CalendarPoppableProps,
  CalendarRangeProps,
  CalendarMultipleProps,
} from './PropsType';
import Popup from '../Popup';
import CalendarPanel from './CalendarPanel';

const prefixCls = 'alita-calendar';

function Calendar(props: BaseCalendarType): React.ReactElement<any, any> | null;

function Calendar(
  props: CalendarPoppableProps,
): React.ReactElement<any, any> | null;

function Calendar(
  props: CalendarRangeProps & CalendarPoppableProps,
): React.ReactElement<any, any> | null;

function Calendar(
  props: CalendarMultipleProps & CalendarPoppableProps,
): React.ReactElement<any, any> | null;

function Calendar(
  props: CalendarRangeProps | CalendarMultipleProps,
): React.ReactElement<any, any> | null;

function Calendar(props: any): React.ReactElement<any, any> | null {
  const log = useTracker(Calendar.displayName, {});
  const {
    poppable = true,
    show = false,
    mode,
    round = true,
    closeOnClickOverlay = true,
    onClose,
    onConfirm,
    ...restProps
  } = props;
  return (
    <>
      {poppable ? (
        <Popup
          show={show}
          mode={mode}
          round={round}
          onClose={onClose}
          closeOnClickOverlay={closeOnClickOverlay}
        >
          <div style={{ height: '80vh' }}>
            <CalendarPanel
              {...props}
              onConfirm={(...e: any) => {
                if (onClose) {
                  onClose();
                }
                if (onConfirm) {
                  onConfirm(...e);
                }
              }}
            ></CalendarPanel>
          </div>
        </Popup>
      ) : (
        <CalendarPanel
          {...restProps}
          show={false}
          poppable={false}
        ></CalendarPanel>
      )}
    </>
  );
}

Calendar.displayName = 'Calendar';
export default withError(Calendar);
