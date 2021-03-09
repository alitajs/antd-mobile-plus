import {usePersistFn, useScroll, useUnmount } from 'ahooks';
import { useRef } from 'react'
export const useScrollEnd = (
    fn: (p: { top: number, left: number }) => void,
    target?: HTMLElement) => {
    const callback = usePersistFn(fn);
    const timerRef = useRef<NodeJS.Timer>();
    const targetEle = target ?? (document.documentElement || document.body);
    const scrollDuration = useRef<number>(targetEle.scrollTop);
    const position = useScroll(targetEle);

    function clearTimerFn(){ 
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    if (Math.abs(scrollDuration.current - position.top) > 0) {
        scrollDuration.current = position.top;
        // 表示正在滚动
        // clearTimerFn();
        timerRef.current = setTimeout(() => { 
            //如果50ms还没有移动判定已经滚动结束
            clearTimerFn();
            callback(position);
        }, 50);
    }
}

export const useScrollTo = function (){
    const _timeout = useRef<NodeJS.Timer | null>(null);
    useUnmount(() => { 
        _timeout.current && clearInterval(_timeout.current);
        _timeout.current = null;
    })

    function run(scrollTarget: HTMLElement,
        position: number,
        timeout: number) { 
        let scrollTop = scrollTarget.scrollTop;
        let direction = position - scrollTop > 0 ? 1 : -1;
        let distance = Math.abs(position - scrollTop);
        let split = distance / 50;
        if (position !== scrollTop) {
            timeout = timeout || 1000;
            split *= direction;
            _timeout.current = setInterval(function () {
                scrollTop += split;
                distance -= Math.abs(split);
                if (0 >= distance) {
                    scrollTarget.scrollTo(0, position);
                    _timeout.current && clearInterval(_timeout.current);
                    _timeout.current = null;
                } else {
                    scrollTarget.scrollTo(0, scrollTop);
                }
            }, timeout / 100);
        }
    }
    return {run};
};