/*
 * @Description:
 * @Author: qclong
 * @Date: 2021-02-24 09:02:10
 */

import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { AliasPickerType } from '../../PropsType';
import PanelCell from '../PanelCell';
import classnames from 'classnames';
import './index.less';

interface ActionContentViewProps {
  isOpen?: boolean;
  data: any[];
  alias?: AliasPickerType;
  onDelete?: (item: any, index: number) => void;
  onItemClick?: (item: any, index: number) => void;
  onRenderItem?: (item: any, index: number) => React.ReactNode;
}

const prefixCls = 'alita-picker-panel-contentview';
const ActionContentView: FC<ActionContentViewProps> = ({
  isOpen,
  data = [],
  alias = { label: 'label', id: 'id' },
  onDelete = () => {},
  onItemClick = () => {},
  onRenderItem,
}) => {
  const aliasDict = { label: 'label', id: 'id' };
  Object.keys(alias).forEach((aliasItem) => {
    aliasDict[aliasItem] = alias[aliasItem];
  });

  return (
    <div className={classnames(prefixCls, { [`${prefixCls}-open`]: isOpen })}>
      {data.map((item, index) => {
        return onRenderItem ? (
          onRenderItem(item, index)
        ) : (
          <PanelCell
            key={item[aliasDict.id]}
            label={item[aliasDict.label]}
            onClick={() => {
              onItemClick(item, index);
            }}
            onDelete={() => {
              onDelete(item, index);
            }}
          ></PanelCell>
        );
      })}
    </div>
  );
};

ActionContentView.displayName = 'ActionContentView';

export default withError(ActionContentView);
