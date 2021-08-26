import React, { useMemo } from 'react';
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
    mode = 'popup',
    round = true,
    closeOnClickOverlay = true,
    onClose,
    onConfirm,
    ...restProps
  } = props;

  const width = useMemo(() => {
    if (mode === 'alert') {
      return '80vw';
    }
    return '100vw';
  }, [mode]);

  const height = useMemo(() => {
    switch (mode) {
      case 'popup':
      case 'dropdown':
        return '80vh';
      case 'alert':
        return '100vw';
    }
    return '100vh';
  }, [mode]);

  return (
    <>
      {poppable ? (
        <Popup
          show={show}
          mode={mode}
          round={round}
          closeable
          onClose={onClose}
          contentSize="100%"
          closeOnClickOverlay={closeOnClickOverlay}
        >
          <div style={{ height, width }}>
            <CalendarPanel
              {...props}
              onConfirm={(...e: any) => {
                if (onClose) {
                  onClose();
                }
                if (onConfirm) {
                  log('onConfirm');
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
