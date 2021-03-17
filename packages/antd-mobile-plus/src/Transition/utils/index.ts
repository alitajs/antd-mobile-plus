import { TransitionType } from '../PropsType';

export const getTransform = (value: string) => {
  const webCores = [
    'transform',
    'MozTransform',
    'WebkitTransform',
    'OTransform',
  ];
  const webTransform = {};
  webCores.forEach((core) => {
    webTransform[core] = value;
  });
  return webTransform;
};

const popStyle = (state: 'open' | 'close', startOffset: number | string) => {
  return {
    bottom: startOffset,
    left: 0,
    right: 0,
    maxHeight: '80%',
    ...(state === 'close'
      ? getTransform('translateY(100%)')
      : getTransform('translateY(0%)')),
  };
};
const dropStyle = (state: 'open' | 'close', startOffset: number | string) => {
  return {
    top: startOffset,
    left: 0,
    right: 0,
    maxHeight: '80%',
    ...(state === 'close'
      ? getTransform('translateY(-100%)')
      : getTransform('translateY(0%)')),
  };
};

const sliderLeftStyle = (
  state: 'open' | 'close',
  startOffset: number | string,
) => {
  return {
    top: 0,
    left: startOffset,
    bottom: 0,
    maxWidth: '80%',
    ...(state === 'close'
      ? getTransform('translateX(-100%)')
      : getTransform('translateX(0%)')),
  };
};

const sliderRightStyle = (
  state: 'open' | 'close',
  startOffset: number | string,
) => {
  return {
    top: 0,
    right: startOffset,
    bottom: 0,
    maxWidth: '80%',
    ...(state === 'close'
      ? getTransform('translateX(100%)')
      : getTransform('translateX(0%)')),
  };
};

const alertStyle = (state: 'open' | 'close', startOffset: number | string) => {
  return {
    top: '50%',
    left: '50%',
    maxWidth: '80%',
    maxHeight: '80%',
    ...(state === 'close'
      ? getTransform('scale(0)')
      : getTransform('scale(1)')),
  };
};

export const bemStyle = (
  mode: TransitionType['mode'],
  state: 'open' | 'close',
  startOffset: number | string,
): TransitionType['style'] => {
  switch (mode) {
    case 'popup':
      return popStyle(state, startOffset);
    case 'dropdown':
      return dropStyle(state, startOffset);
    case 'sliderLeft':
      return sliderLeftStyle(state, startOffset);
    case 'sliderRight':
      return sliderRightStyle(state, startOffset);
    // case 'alert':
    //     return alertStyle(state);
    default:
      return popStyle(state, startOffset);
  }
};

export const useTimeout = (
  callback: () => void,
  duration: TransitionType['duration'],
  show: TransitionType['show'],
  delay: TransitionType['delay'],
) => {
  const ms = Array.isArray(duration)
    ? show
      ? duration[0]
      : duration[1]
    : duration;
  const del = Array.isArray(delay) ? (show ? delay[0] : delay[1]) : delay;
  const timer = setTimeout(() => {
    callback();
    clearTimeout(timer);
  }, (ms + del)! * 1000);
  return timer;
};

export const getTransition = (
  duration: TransitionType['duration'],
  delay: TransitionType['delay'],
  show: boolean,
  property: string,
) => {
  const dura = Array.isArray(duration)
    ? show
      ? duration[1]
      : duration[0]
    : duration;
  const del = Array.isArray(delay) ? (show ? delay[1] : delay[0]) : delay;
  const webCores = [
    'transition',
    'MozTransition',
    'WebkitTransition',
    'OTransition',
  ];
  const webTransition = {};
  webCores.forEach((core) => {
    webTransition[core] = `${property} ${dura}s linear ${del}s`;
  });
  return webTransition;
};
