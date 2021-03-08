import { CSSProperties } from 'react';

export interface CSSStyle extends CSSProperties { 
    position?: 'fixed' | 'absolute';
}

export interface TransitionType {
    show?: boolean;
    mode?: 'popup' | 'dropdown' | 'sliderLeft' | 'sliderRight';
    style?: CSSStyle;
    duration?: [number, number] | number;
    delay?: number;
    onStartAnimation?: () => void;
    onEndAnimation?: () => void;
    onWillOpen?: () => void;
    onOpened?: () => void;
    onWillClose?: () => void;
    onClosed?: () => void;
    className?: string;
    startOffset?: number | string;
}