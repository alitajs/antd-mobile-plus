import { CarouselProps } from 'antd-mobile/es/carousel';

export interface CarouselPropsType extends CarouselProps {
  /**
   * @description       手动设置当前显示的索引
   * @description.en-US current selected index
   * @default           0
   */
  selectedIndex?: CarouselProps['selectedIndex'];
  /**
   * @description       是否显示面板指示点
   * @description.en-US whether to display the indication dots
   * @default           true
   */
  dots?: CarouselProps['dots'];
  /**
   * @description       垂直显示
   * @description.en-US this prop controls the content display direction
   * @default           false
   */
  vertical?: CarouselProps['vertical'];
  /**
   * @description       是否自动切换
   * @description.en-US autoplay mode active
   * @default           false
   */
  autoplay?: CarouselProps['autoplay'];
  /**
   * @description       自动切换的时间间隔
   * @description.en-US interval for autoplay iteration
   * @default           3000
   */
  autoplayInterval?: CarouselProps['autoplayInterval'];
  /**
   * @description       是否循环播放
   * @description.en-US whether is infinite loop
   * @default           false
   */
  infinite?: CarouselProps['infinite'];
  /**
   * @description       切换面板后的回调函数
   * @description.en-US callback to be called after a slide is changed
   */
  afterChange?: CarouselProps['afterChange'];
  /**
   * @description       指示点样式
   * @description.en-US style of dots
   */
  dotStyle?: CarouselProps['dotStyle'];
  /**
   * @description       当前激活的指示点样式
   * @description.en-US style of active dot
   */
  dotActiveStyle?: CarouselProps['dotActiveStyle'];
  /**
   * @description       设置 slider frame 的 overflow 样式
   * @description.en-US Used to set overflow style property on slider frame.
   * @default           `hidden`
   */
  frameOverflow?: CarouselProps['frameOverflow'];
  /**
   * @description       项目之间的间距，以`px`为单位
   * @description.en-US Space between slides, as an integer, but reflected as `px`
   */
  cellSpacing?: CarouselProps['cellSpacing'];
  /**
   * @description       手动设置项目宽度. 可以是`slideWidth="20px"`，也可以是相对容器的百分比`slideWidth={0.8}`
   * @description.en-US Manually set slideWidth. If you want hard pixel widths, use a string like `slideWidth="20px"`, and if you prefer a percentage of the container, use a decimal integer like `slideWidth={0.8}`
   */
  slideWidth?: CarouselProps['slideWidth'];
  /**
   * @description       缓动函数，你可以使用[这里](https://github.com/chenglou/tween-functions)提供的其他函数
   * @description.en-US Animation easing function, see valid easings [here](https://github.com/chenglou/tween-functions)
   * @default           easeOutCirc
   */
  easing?: CarouselProps['easing'];
  /**
   * @description       滑动灵敏度
   * @description.en-US configure the swipe sensitivity
   * @default           12
   */
  swipeSpeed?: CarouselProps['swipeSpeed'];
  /**
   * @description       切换面板前的回调函数
   * @description.en-US callback to be called before a slide is changed
   */
  beforeChange?: CarouselProps['beforeChange'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
