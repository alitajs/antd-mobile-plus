import { useMount } from 'ahooks';
import { useRef, useEffect } from 'react';

export function useRefs<T = Element>() {
    const refs = useRef<any>([]);
    useEffect(() => {
        refs.current = [];
    }, []);

    const setRefs = (index: number) => (el: unknown) => {
        refs.current[index] = el as T;
    };

    return [refs, setRefs] as const;
}

export const inBrowser = typeof window !== 'undefined';

const root = (inBrowser ? window : global) as Window;

let prev = Date.now();

function rafPolyfill(fn: FrameRequestCallback): number {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}

export function raf(fn: FrameRequestCallback): number {
    const requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
    return requestAnimationFrame.call(root, fn);
}
