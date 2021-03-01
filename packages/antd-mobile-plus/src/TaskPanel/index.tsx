import React, { FC } from 'react';
import TaskCell from './components/TaskCell';
import { withError, useTracker } from '@alitajs/tracker';
import { TaskPanelType, TaskPanelItemType } from './PropsType';
import './index.less';

const prefixCls = 'alita-task-panel';

const TaskPanel: FC<TaskPanelType> = (props) => {
  const { data, onSelected, selectId } = props;
  const log = useTracker(TaskPanel.displayName, {});
  return (
    <div className={prefixCls}>
      {data.map((item) => {
        return (
          <TaskCell
            {...item}
            key={item.id}
            onSelected={(e: TaskPanelItemType) => {
              log('onSelected');
              onSelected(e);
            }}
            selectId={selectId}
          />
        );
      })}
    </div>
  );
};

TaskPanel.displayName = 'TaskPanel';
export default withError(TaskPanel);
