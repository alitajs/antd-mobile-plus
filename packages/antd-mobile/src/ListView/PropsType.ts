import AListView, { ListViewProps as ListViewType } from 'antd-mobile/es/list-view';
import { MIndexedListProps } from 'antd-mobile/es/list-view/Indexed'
export type DataSourceType = typeof AListView.DataSource;
type MIndexedListType = typeof AListView.IndexedList;

export interface IndexedListProps extends MIndexedListType {
   /**
     * @description       快捷导航栏最顶部按钮、常用于回到顶部
     * @description.en-US top button object of navigation bar
     * @default 
     */
    quickSearchBarTop?: MIndexedListProps["quickSearchBarTop"];
    /**
     * @description       quickSearchBar 的 style
     * @description.en-US quickSearchBar's style
     * @default 
     */
     quickSearchBarStyle?: MIndexedListProps["quickSearchBarStyle"];
    /**
     * @description       快捷导航切换时调用 
     * @description.en-US fire on clicking navigation bar.
     * @default 
     */
     onQuickSearch?: MIndexedListProps["onQuickSearch"];
    /**
     * @description      whether show quick search indicator
     * @description.en-US whether show quick search indicator
     * @default false
     */
    showQuickSearchIndicator?: boolean;
    /**
     * @description       延迟渲染时间设置（用于首屏优化，一开始渲染`initialListSize`数量的数据，在此时间后、延迟渲染剩余的数据项、即`totalRowCount - initialListSize`
     * @description.en-US delay rendering time setting (for the first screen optimization, the initial rendering of the number of `initialListSize` data, after which time rendering the remaining data items, ie `totalRowCount - initialListSize`)
     * @default 100ms
     */
    delayTime?: MIndexedListProps["delayTime"];
    /**
     * @description       延迟渲染的 loading 指示器
     * @description.en-US the loading indicator for delayed rendering.
     * @default 
     */
     delayActivityIndicator?: MIndexedListProps["delayActivityIndicator"];
}

export interface ListViewProps extends ListViewType {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     * @default 
     */
    ext?: any;
    /**
     * @description       [ListView.DataSource](https://facebook.github.io/react-native/docs/listviewdatasource) 实例 
     * @description.en-US An instance of [ListView.DataSource](https://facebook.github.io/react-native/docs/listviewdatasource) to use
     * @default 
     */
    dataSource: ListViewType["dataSource"];
    /**
     * @description       指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据
     * @description.en-US How many rows to render on initial component mount.
     * @default 
     */
    initialListSize?: ListViewType["initialListSize"];
    /**
     * @description       当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足`onEndReachedThreshold`个像素的距离时调用 
     * @description.en-US Called when all rows have been rendered and the list has been scrolled to within `onEndReachedThreshold` of the bottom. 
     * @default 
     */
    onEndReached?: ListViewType["onEndReached"];
    /**
     * @description       调用`onEndReached`之前的临界值，单位是像素
     * @description.en-US Threshold in pixels (virtual, not physical) for calling `onEndReached`.
     * @default  1000
     */
    onEndReachedThreshold?: ListViewType["onEndReachedThreshold"];
    /**
     * @description       每次事件循环（每帧）渲染的行数
     * @description.en-US Number of rows to render per event loop.
     * @default 1
     */
    pageSize?: ListViewType["pageSize"];
    /**
    * @description       页头与页脚（如果提供）会在每次渲染过程中都重新渲染。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚在列表的最底部，而页头会在最顶部
    * @description.en-US The header and footer are always rendered (if these props are provided) on every render pass. If they are expensive to re-render, wrap them in StaticContainer or other mechanism as appropriate. Footer is always at the bottom of the list, and header at the top, on every render pass.
    * @default 
    */
    renderHeader?: ListViewType["renderHeader"];
    /**
   * @description       页头与页脚（如果提供）会在每次渲染过程中都重新渲染。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚在列表的最底部，而页头会在最顶部
   * @description.en-US The header and footer are always rendered (if these props are provided) on every render pass. If they are expensive to re-render, wrap them in StaticContainer or other mechanism as appropriate. Footer is always at the bottom of the list, and header at the top, on every render pass.
   * @default 
   */
    renderFooter?: ListViewType["renderFooter"];
    /**
    * @description       从数据源(data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。
    * @description.en-US Takes a data entry from the data source and its ids and should return a renderable component to be rendered as the row. By default the data is exactly what was put into the data source, but it's also possible to provide custom extractors. ListView can be notified when a row is being highlighted by calling highlightRow function.
    * @default 
    */
    renderRow: ListViewType["renderRow"];
    /**
   * @description       指定一个函数，在其中返回一个可以滚动的组件，ListView将会在该组件内部进行渲染。默认情况下会返回一个包含指定属性的ScrollView。
   * @description.en-US A function that returns the scrollable component in which the list rows are rendered. Defaults to returning a ScrollView with the given props.
   * @default 
   */
    renderScrollComponent?: ListViewType["renderScrollComponent"];
    /**
    * @description       如果提供了此函数，会为每个小节(section)渲染一个标题
    * @description.en-US If provided, a header is rendered for this section.
    * @default 
    */
    renderSectionHeader?: ListViewType["renderSectionHeader"];
    /**
   * @description       如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。
   * @description.en-US If provided, a renderable component to be rendered as the separator below each row but not the last row if there is a section header below. Take a sectionID and rowID of the row above and whether its adjacent row is highlighted. 
   * @default 
   */
    renderSeparator?: ListViewType["renderSeparator"];
    /**
    * @description       当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行
    * @description.en-US How early to start rendering rows before they come on screen, in pixels.
    * @default 1000
    */
    scrollRenderAheadDistance?: ListViewType["scrollRenderAheadDistance"];
    /**
   * @description       这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内
   * @description.en-US These styles will be applied to the scroll view content container which wraps all of the child views.
   * @default 
   */
    contentContainerStyle?: ListViewType["contentContainerStyle"];
    /**
    * @description       当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列
    * @description.en-US When true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.
    * @default false
    */
    horizontal?: ListViewType["horizontal"];
    /**
   * @description       此函数会在 ScrollView 内部可滚动内容的视图发生变化时调用。
   * @description.en-US Called when scrollable content view of the ScrollView changes.
   * @default 
   */
    onContentSizeChange?: ListViewType["onContentSizeChange"];
    /**
   * @description       在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用`scrollEventThrottle`属性来控制
   * @description.en-US Fires at most once per frame during scrolling. The frequency of the events can be controlled using the `scrollEventThrottle` prop.
   * @default 
   */
    onScroll?: ListViewType["onScroll"];

    /**
    * @description       控制在滚动过程中，scroll事件被调用的频率
    * @description.en-US This controls how often the scroll event will be fired while scrolling
    * @default  50
    */
    scrollEventThrottle?: ListViewType["scrollEventThrottle"];
    /**
     * @description      当组件挂载或者布局变化的时候调用
     * @description.en-US tracker
     * @default 
     */
    onLayout?: ListViewType["onLayout"];
    /**
     * @description       自定义 body 的包裹组件
     * @description.en-US render listview body wrapper component
     * @default 
     */
    renderBodyComponent?: ListViewType["renderBodyComponent"];
    /**
     * @description       渲染自定义的区块包裹组件
     * @description.en-US render listview section wrapper component
     * @default 
     */
    renderSectionWrapper?: ListViewType["renderSectionWrapper"];
    /**
     * @description       渲染自定义的区块 body 包裹组件
     * @description.en-US render listview section body wrapper component
     * @default 
     */
    renderSectionBodyWrapper?: ListViewType["renderSectionBodyWrapper"];
    /**
     * @description       使用 html 的 `body` 作为滚动容器
     * @description.en-US use html `body`'s scroll
     * @default false
     */
    useBodyScroll?: ListViewType["useBodyScroll"];
    /**
     * @description       使用 pullToRefresh， 你需要和 `PullToRefresh` 组件一起使用 
     * @description.en-US Whether enable pullToRefresh, you need use it with `PullToRefresh` component
     * @default false
     */
    pullToRefresh?: ListViewType["pullToRefresh"];
}
