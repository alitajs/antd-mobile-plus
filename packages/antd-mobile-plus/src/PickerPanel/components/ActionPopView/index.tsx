/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-03-01 17:13:41
 */
import React, { FC, useState, useEffect } from 'react';
import HeaderView from '../HeaderView';
import { withError, useTracker } from '@alitajs/tracker';
import ActionContentView from '../ActionContentView';
import { PickerPanelType } from '../../PropsType';
import './index.less';

interface ActionPopViewProps extends PickerPanelType {}

const prefixCls = 'alita-action-popview';
const ActionPopView: FC<ActionPopViewProps> = ({
  onRenderLeftLabel,
  onRenderHeaderView,
  data = [],
  open = false,
  onToggleHandle = () => {},
  ...contentProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  useEffect(() => {
    onToggleHandle(isOpen);
  }, [isOpen]);
  const log = useTracker(ActionPopView.displayName, {});
  return (
    <>
      <div
        className={`${prefixCls}-mask`}
        hidden={!isOpen}
        onClick={() => {
          log('onToggleHandle: false');
          setIsOpen(false);
        }}
      ></div>
      <div className={`${prefixCls}`}>
        {onRenderHeaderView ? (
          onRenderHeaderView(data.length)
        ) : (
          <HeaderView
            count={data.length}
            onClick={() => {
              log(`onToggleHandle:${isOpen}`);
              setIsOpen(!isOpen);
            }}
            isOpen={isOpen}
            onRenderLeftLabel={onRenderLeftLabel}
          />
        )}
        <ActionContentView data={data} isOpen={isOpen} {...contentProps} />
      </div>
    </>
  );
};

ActionPopView.displayName = 'ActionPopView';

export default withError(ActionPopView);
