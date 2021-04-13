import * as React from 'react';
import AListItem, { ListItemProps, Brief } from 'antd-mobile/lib/list/ListItem';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface ListItemFC<T> extends React.FC<T> {
  Brief?: typeof Brief;
}

interface ListItemType extends ListItemProps {
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   * @default
   */
  ext?: any;

  /**
   * @description       缩略图(当为 string 类型时作为 img src)
   * @description.en-US thumbnail on the left side of `List`(string type will be used to set img src)
   * @default
   */
  thumb?: any;

  /**
   * @description       右边内容
   * @description.en-US extra content on the right side of `List`
   * @default
   */
  extra?: any;
  /**
   * @description      箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是`empty`则存在对应的dom,但是不显示
   * @description.en-US arrow direction, options: `horizontal`,`up`,`down`, `empty`; `empty` option may hide the dom
   * @default
   */
  arrow?: any;
  /**
   * @description       子元素垂直对齐，可选`top`,`middle`,`bottom`
   * @description.en-US vertical alignment of child elements，options: `top`,`middle`,`bottom`
   * @default
   */
  align?: any;
  /**
   * @description       点击事件的回调函数
   * @description.en-US callback is called when  list is clicked
   * @default
   */
  onClick?: any;
  /**
   * @description       报错样式,右侧文字颜色变成橙色
   * @description.en-US Whether to display error style(the color of text on the right side may change to orange)
   * @default
   */
  error?: any;
  /**
   * @description       多行
   * @description.en-US multiple line
   * @default false
   */
  multipleLine?: any;
  /**
   * @description       是否换行，默认情况下，文字超长会被隐藏，
   * @description.en-US Whether to wrap long texts, otherwise it will be hidden by default.
   * @default false
   */
  wrap?: any;
  /**
   * @description       自定义active的样式
   * @description.en-US customized active style
   * @default
   */
  activeStyle?: any;
  /**
   * @description       设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `cross`， 即组件会自动检测设备 UA 应用不同平台的样式
   * @description.en-US set the special style depends on platform, Options  `android`, `ios`， default to be `cross`， which means we will detect UA and change the component style
   * @default `'cross'`
   */
  platform?: any;
}

export const ListItem: ListItemFC<ListItemType & { ext: any }> = (props) => {
  const { ext, onClick, ...reset } = props;
  const log = useTracker(ListItem.displayName, {
    ext,
  });
  return (
    <AListItem
      onClick={(...e) => {
        onClick && onClick(...e);
        log('onClick');
      }}
      {...reset}
    ></AListItem>
  );
};

ListItem.displayName = 'ListItem';
ListItem.Brief = Brief;
export default withError(ListItem);
