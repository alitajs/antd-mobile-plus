import { useMemo } from 'react'
import { PopupType } from '../PropsType'


export const overlayOrigin = (scrollElement: HTMLElement, topEle: HTMLElement, direction?: 'up' | 'down', offset = 0, popMode: PopupType['popMode'] ): { top: number, bottom: number } => { 
    let px = 0;
    if (popMode === 'relative') {
        px = topEle.getBoundingClientRect().y
    }
    if (direction === 'down') {
        return {
            bottom: 0,
            top: px + offset
        }
    } 
    if (direction === 'up') {
        let bottom = 0;
        if (popMode === 'relative') {
            bottom = (document.documentElement || document.body).clientHeight - px;
        } 
        return {
            top: 0,
            bottom: bottom +  offset
        }
    }
    return {
        top: 0,
        bottom:0
    }
}

export const useLockScroll = (show:boolean, scrollElement:HTMLElement, className:string) => { 
  // show变化时增加滚动锁定
  useMemo(() => {
    setClass(
        scrollElement,
        className,
        show ? 'add' : 'remove',
    );
  }, [show]);
}

const addClass = (targetEle:HTMLElement, className: string) => { 
    const classList = targetEle.classList;
    if (classList.contains(className)) {
        return;
    }
    classList.add(className);
    targetEle.className = Array.from(classList).join(' ');
} 

const removeClass = (targetEle:HTMLElement, className: string) => { 
    const classList = targetEle.classList;
    if (!classList.contains(className)) {
        return;
    }
    classList.remove(className);
    targetEle.className = Array.from(classList).join(' ');
} 


export const setClass = (targetEle: HTMLElement, className: string, type: 'add' | 'remove') => { 
    if (!targetEle || !className) {
        return;
    }
    if (type === 'add') {
        addClass(targetEle, className);
    }
    if (type === 'remove') {
        removeClass(targetEle, className);
    }
}