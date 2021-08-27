import { PopupType } from '../Popup/PropsType'

export type CalendarType = 'single' | 'range' | 'multiple';

export interface BaseCalendarType {
    /**
     * @description 选择类型: `single`表示选择单个日期，`multiple`表示选择多个日期，`range`表示选择日期区间
     * @default single
     */
    type?: CalendarType;

    /**
     * @description 日历标题
     * @default 日期选择	
     */
    title?: string;

    /**
     * @description 可选择的最小日期
     * @default 当前日期
     */
    minDate?: Date;

    /**
     * @description 可选择的最大日期
     * @default 当前日期的六个月后
     */
    maxDate?: Date;

    /**
     * @description 默认选中的日期，`type` 为 `multiple` 或 `range`时为数组，传入 null 表示默认不选择
     * @default 今天
     */
    defaultDate?: Date | Date[] | null;

    /**
     * @description 日期格式化函数
     * @default -
     */
    formatter?: (day: CalendarDayItem) => CalendarDayItem;

    /**
     * @description 是否以弹层的形式展示日历
     * @default true
     */
    poppable?: boolean;

    /**
     * @description 是否只渲染可视区域的内容
     * @default true
     */
    lazyRender?: boolean;

    /**
     * @description 是否显示月份背景水印
     * @default true
     */
    showMark?: boolean;

    /**
     * @description 是否展示日历标题
     * @default true
     */
    showTitle?: boolean;

    /**
     * @description 是否展示范围提示框
     * @default true
     */
    showRangePrompt?: boolean;

    /**
     * @description 是否展示日历副标题（年月）
     * @default true
     */
    showSubtitle?: boolean;

    /**
     * @description 是否展示确认按钮
     * @default true
     */
    showConfirm?: boolean;

    /**
     * @description 是否为只读状态，只读状态下不能选择日期
     * @default false
     */
    readonly?: boolean;

    /**
     * @description 确认按钮的文字	
     * @default 确定
     */
    confirmText?: string;

    /**
     * @description 确认按钮处于禁用状态时的文字
     * @default 确定
     */
    confirmDisabledText?: string;

    /**
     * @description 设置周起始日	
     * @default 0
     */
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * @description 设置主题颜色
     */
    color?: React.CSSProperties['color'];

    /**
     * @description 点击并选中任意日期时触发
     */
    onSelect?: (value: Date | Date[]) => void;

    /**
     * @description 日期选择完成后触发，若showConfirm为true，则点击确认按钮后触发
     */
    onConfirm?: (value: Date | Date[]) => void;

    /**
     * @description 当日历组件的 type 为 multiple 时，取消选中日期时触发
     */
    onUnselect?: (value: Date) => void;
}

export interface CalendarPoppableProps extends Omit<BaseCalendarType, 'poppable'> {
    poppable?: true;
    /**
     * @description 是否显示日历弹窗
     * @default false
     */
    show?: boolean;

    /**
     * @description 弹出位置
     * @default 从底部弹出
     */
    mode?: PopupType['mode'];

    /**
     * @description 是否显示圆角
     * @default true
     */
    round?: PopupType['round'];
    /**
     * @description 是否在点击遮罩层后关闭视图
     * @default true
     */
    closeOnClickOverlay?: PopupType['closeOnClickOverlay'];

    /**
     * @description 关闭时响应
     */
    onClose?: PopupType['onClose']
}

export interface CalendarRangeProps extends Omit<BaseCalendarType, 'type'> {
    type: 'range';
    /**
     * @description 日期区间最多可选天数
     * @default 无限制
     */
    maxRange?: number | string;

    /**
     * @description 范围选择超过最多可选天数时的提示文案
     * @default 选择天数不能超过 xx 天
     */
    rangePrompt?: string;

    /**
     * @description 是否允许日期范围的起止时间为同一天
     * @default false
     */
    allowSameDay?: boolean;
}


export interface CalendarMultipleProps extends Omit<BaseCalendarType, 'type'> {
    type: 'multiple';
    /**
     * @description 日期区间最多可选天数
     * @default 无限制
     */
    maxRange?: number | string;

    /**
     * @description 范围选择超过最多可选天数时的提示文案
     * @default 选择天数不能超过 xx 天
     */
    rangePrompt?: string;
}

export type CalendarDayType =
    | ''
    | 'start'
    | 'start-end'
    | 'middle'
    | 'end'
    | 'selected'
    | 'multiple-middle'
    | 'multiple-selected'
    | 'disabled'
    | 'placeholder';

export type CalendarDayItem = {
    date?: Date;
    text?: string | number;
    type?: CalendarDayType;
    topInfo?: string;
    className?: unknown;
    bottomInfo?: string;
};
