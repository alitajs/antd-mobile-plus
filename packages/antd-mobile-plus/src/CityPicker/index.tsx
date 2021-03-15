import React, { FC, useState, useMemo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { useSetState } from 'ahooks';
import { PickerView } from './components';
import { CityPickerType } from './PropsType';
import Popup from '../Popup';
import './index.less';

const prefixCls = 'alita-city-picker';
const CityPicker: FC<CityPickerType> = ({
  scrollElement,
  show,
  onClose = () => {},
  onChange = () => {},
  ...otherProps
}) => {
  const log = useTracker(CityPicker.displayName, {});
  const [visiable, setVisiable] = useState(false);

  useMemo(() => {
    if (show) {
      setVisiable(show);
    }
  }, [show]);

  const onCloseView = () => {
    log('onClose');
    onClose();
  };

  const onChangeView = (item: any) => {
    log('onChange');
    onChange(item);
  };

  return (
    <Popup
      show={show}
      style={{
        maxHeight: '70vh',
        zIndex: 1000,
      }}
      onClose={onCloseView}
      closeOnClickOutside={false}
      scrollElement={scrollElement}
      direction="up"
      popMode="fullscreen"
      className={`${prefixCls}-pop`}
      onClosed={() => {
        setVisiable(false);
      }}
    >
      {visiable && (
        <PickerView
          show={show}
          onClose={onCloseView}
          onChange={onChangeView}
          {...otherProps}
        />
      )}
    </Popup>
  );
};

CityPicker.displayName = 'CityPicker';
export default withError(CityPicker);
