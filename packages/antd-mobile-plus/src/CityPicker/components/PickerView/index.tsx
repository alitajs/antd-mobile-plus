import React, { FC, useState, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { CityPickerViewType } from '../../PropsType';
import NavView from '../NavView';
import Header from '../Header';
import TableView from '../TableView';
import { useSetState } from 'ahooks';
import './index.less';

interface PickerViewType extends CityPickerViewType {
  /**
   * @description 展示结果回调
   * @default -
   */
  onFinish?: (ids: string[], items: object[]) => void;

  /**
   * @description 展示
   * @default false
   */
  show: boolean;

  /**
   * @description 选择的最大层级
   * @default 0
   */
  maxDeep?: number;
}

const prefixCls = 'alita-picker-view';

const PickerView: FC<PickerViewType> = ({
  title,
  onClose,
  onChange = () => {},
  data = [],
  alias = {},
  placeholder,
  onFinish,
  initialValues,
  show,
  maxDeep = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trueAlias = { id: 'id', label: 'label', ...alias };
  const [navList, setNavList] = useState<object[]>(() => {
    if (!initialValues) {
      return [];
    }
    const values = Array.isArray(initialValues)
      ? initialValues
      : [initialValues];
    const d = values.map((item) => ({
      [`${trueAlias.id}`]: item[trueAlias.id],
      [`${trueAlias.label}`]: item[trueAlias.label],
    }));
    return d;
  });

  const [state, setState] = useSetState({
    initial: true,
  });

  const onSelectChange = (fromIndex: number) => {
    setCurrentIndex(fromIndex);
    if (fromIndex < 0) {
      onChange();
      return;
    }
    onChange(navList[fromIndex]);
  };

  const onAdd = (item?: object) => {
    onChange(item);
    setCurrentIndex(navList.length);
    const list = navList.filter((item, index) => index <= currentIndex);
    setNavList([...list, item!]);
    if (maxDeep !== 0 && list.length + 1 >= maxDeep) {
      onFinishCallback([...list, item!]);
    }
  };

  const onFinishCallback = (list?: any) => {
    onClose && onClose();
    const items = list ?? navList;
    const ids = items.map((item: { [x: string]: any }) => item[trueAlias.id]);
    onFinish && onFinish(ids, navList);
    setState({ initial: true });
  };

  useEffect(() => {
    if (!state.initial && data.length == 0) {
      onFinishCallback();
    }
    data.length > 0 && setState({ initial: false });
  }, [data]);

  useEffect(() => {
    if (show) {
      if (navList.length > 0) {
        onSelectChange(navList.length - 2);
      } else {
        onChange();
      }
    }
  }, [show]);

  return (
    <div className={prefixCls}>
      <Header onClose={onClose} title={title} />
      <NavView
        placeholder={placeholder}
        onClick={onSelectChange}
        selectList={navList}
        alias={trueAlias}
      />
      <TableView
        selectList={navList}
        onChange={onAdd}
        data={data}
        alias={trueAlias}
      />
    </div>
  );
};

PickerView.displayName = 'PickerView';
export default withError(PickerView);
