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
      onClose={onCloseView}
      scrollElement={scrollElement}
      mode="popup"
      type="fullscreen"
      className={`${prefixCls}-pop`}
      onExited={() => {
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
