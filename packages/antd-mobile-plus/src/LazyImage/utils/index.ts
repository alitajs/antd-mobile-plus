// 后续优化使用

import { useMount } from 'ahooks'
type noop = (e: any) => void;


const useLoadImageAsync = (item: {
    src: string,
    cors?: string
}, resolve: noop, reject: noop) => {
    useMount(() => {
        if (!item || !item.src) {
            const err = new Error('image src is required');
            return reject(err);
        }
        const image = new Image();
        image.src = item.src;
        if (item.cors) {
            image.crossOrigin = item.cors;
        }

        image.onload = function () {
            resolve({
                naturalHeight: image.naturalHeight,
                naturalWidth: image.naturalWidth,
                src: image.src,
            });
        };

        image.onerror = function (e) {
            reject(e);
        };
    });
};

/**
 * @description 图片缓存管理类
 */
class ImageCache {
    options: { max: any; };
    _caches: any[];
    constructor({ max }: { max: number }) {
        this.options = {
            max: max || 100,
        };
        this._caches = [] as any[];
    }
    has(key: string) {
        return this._caches.indexOf(key) > -1;
    }
    add(key: string) {
        if (this.has(key)) return;
        this._caches.push(key);
        if (this._caches.length > this.options.max) {
            this.free();
        }
    }
    free() {
        this._caches.shift();
    }
}

export {
    useLoadImageAsync,
    ImageCache
}