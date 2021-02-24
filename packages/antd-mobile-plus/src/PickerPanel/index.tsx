import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import { PickerPanelType } from './PropsType';
import ActionPopView from './components/ActionPopView';

const PickerPanel: FC<PickerPanelType> = (props) => {
  return <ActionPopView {...props} />;
};

PickerPanel.displayName = 'PickerPanel';

export default withError(PickerPanel);
