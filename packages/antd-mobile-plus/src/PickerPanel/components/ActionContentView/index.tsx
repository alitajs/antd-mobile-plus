import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { AliasPickerType } from '../../PropsType';
import PanelCell from '../PanelCell';
import classnames from 'classnames';
import './index.less';

interface ActionContentViewProps {
  /**
   * @description 控制展示和隐藏
   * @default false
   */
  isOpen?: boolean;
  /**
   * @description 数据源
   */
  data: any[];
  /**
   * @description 别名
   */
  alias?: AliasPickerType;
  /**
   * @description 删除回调事件
   */
  onDelete?: (item: any, index: number) => void;
  /**
   * @description cell点击事件
   */
  onItemClick?: (item: any, index: number) => void;
  /**
   * @description 点击删除按钮
   */
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
