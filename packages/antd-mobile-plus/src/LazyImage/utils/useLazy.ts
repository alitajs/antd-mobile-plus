import { useEffect } from 'react'
import { useInViewport, useSetState } from 'ahooks';
import { BasicTarget } from 'ahooks/lib/utils/domTarget';

export const useLazy = (ref: BasicTarget<HTMLElement>, src: string, placeholder?: string) => {
    const inViewPort = useInViewport(ref);
    const [state, setState] = useSetState({ src: placeholder || '' });
    useEffect(() => {
        if (inViewPort && state.src === placeholder) {
            let targetSrc = src || placeholder;
            setState({ src: targetSrc });
        }
    }, [inViewPort, src, placeholder])
    return state.src;
}