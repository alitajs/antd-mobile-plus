import { useDebounceEffect, useUnmount, useScroll, usePersistFn } from 'ahooks';
import { useRef } from 'react';

export const useScrollEnd = function (
  fn: (p: { top: number; left: number }) => void,
  target?: HTMLElement,
  options?: any,
) {
  const position = useScroll(target);
  const persistFn = usePersistFn(fn);
  useDebounceEffect(
    () => {
      persistFn(position);
    },
    [`${position.top}`],
    options ?? { wait: 50 },
  );
};

export const useScrollTo = function () {
  const _timeout = useRef<NodeJS.Timer | null>(null);
  useUnmount(() => {
    _timeout.current && clearInterval(_timeout.current);
    _timeout.current = null;
  });

  function run(scrollTarget: HTMLElement, position: number, timeout: number) {
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
  return { run };
};
