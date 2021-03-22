import { useMemo } from 'react';
import { PopupType } from '../PropsType';
import { TransitionProps } from '../components/Transition'

export const overlayOrigin = (
  topEle: HTMLElement,
  mode?: PopupType['mode'],
  offset = 0,
  popMode?: PopupType['type'],
): TransitionProps['overlayStyle']|undefined => {
  if (mode === 'alert' || mode === 'sliderLeft' || mode === 'sliderRight') {
    return;
  }
  if (popMode === 'fullscreen') {
    return;
  }
  switch (mode) {
    case 'popup':
      return {
        bottom: document.documentElement.clientHeight - topEle.getBoundingClientRect().y - offset
      }
    case 'dropdown':
      return {
        top: topEle.getBoundingClientRect().y + offset
      }
  }
  return;
};

export const useLockScroll = (
  show: boolean,
  scrollElement: HTMLElement,
  className: string,
) => {
  // show变化时增加滚动锁定
  useMemo(() => {
    setClass(scrollElement, className, show ? 'add' : 'remove');
  }, [show]);
};

const addClass = (targetEle: HTMLElement, className: string) => {
  const classList = targetEle.classList;
  if (classList.contains(className)) {
    return;
  }
  classList.add(className);
  targetEle.className = Array.from(classList).join(' ');
};

const removeClass = (targetEle: HTMLElement, className: string) => {
  const classList = targetEle.classList;
  if (!classList.contains(className)) {
    return;
  }
  classList.remove(className);
  targetEle.className = Array.from(classList).join(' ');
};

export const setClass = (
  targetEle: HTMLElement,
  className: string,
  type: 'add' | 'remove',
) => {
  if (!targetEle || !className) {
    return;
  }
  if (type === 'add') {
    addClass(targetEle, className);
  }
  if (type === 'remove') {
    removeClass(targetEle, className);
  }
};
