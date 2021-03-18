
export interface CapsuleType {
    /**
     * @description 尺寸
     * @default md
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * @description 胶囊按钮类型
     * @default ghost
     */
    type?: 'primary' | 'ghost' | 'default';

    /**
     * @description 点击事件
     */
    onPress?: () => void;

    /**
     * @description 是否点击
     * @default false
     */
    disable?: boolean;

    /**
     * @description 文字
     */
    text?: string;

    /**
     * @description `class`
     */
    className?: string;
}
