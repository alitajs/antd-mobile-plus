import React, { FC } from 'react';
import { TaskPanelDataType, TaskPanelItemType } from '../../PropsType';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface TaskCellType extends TaskPanelDataType {
  selectId?: string;
  onSelected: (item: TaskPanelItemType) => void;
}

const prefixCls = 'alita-task-cell';

const TaskCell: FC<TaskCellType> = ({
  taskName = '',
  taskInfos = [],
  selectId = '',
  onSelected = () => {},
}) => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-taskname`}>{taskName}</div>
      <div className={`${prefixCls}-subtask`}>
        {taskInfos.map((item) => (
          <div
            className={classnames(`${prefixCls}-item`, {
              [`${prefixCls}-active`]: item.id === selectId,
            })}
            key={item.id}
            onClick={() => {
              onSelected(item);
            }}
          >
            {item.label}·{item.count}
          </div>
        ))}
      </div>
    </div>
  );
};

TaskCell.displayName = 'TaskCell';
export default withError(TaskCell);
