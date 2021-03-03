import * as React from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import FilterItem from './component/FilterItem';
import { FilterProps, FilterItemProps } from './PropsType';
import './index.less';

const prefixCls = 'alita-filter';

export const FilterItems: React.FC<FilterProps> = (props) => {
  const { data = [], defalutSelect = 0, alias, onItemChange } = props;
  const [activeIndex, updateActiveIndex] = React.useState(-1);

  const log = useTracker(FilterItems.displayName, {});
  const myFilter = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-single`]: data.length === 1,
  });
  return (
    <div className={myFilter}>
      {data.map((item: FilterItemProps, index: number) => {
        const { filterId } = item;
        return (
          <FilterItem
            defalutSelect={defalutSelect}
            alias={alias}
            onItemChange={onItemChange}
            key={filterId}
            item={item}
            openFlag={index === activeIndex ? 'down' : 'up'}
            onClick={(options: string) => {
              log(options);
              if (options === 'down') {
                updateActiveIndex(index);
              } else {
                updateActiveIndex(-1);
              }
            }}
          />
        );
      })}
    </div>
  );
};

FilterItems.displayName = 'FilterItems';
export default withError(FilterItems);
