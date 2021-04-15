import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import { TextOverflowType } from './PropsType';

const TextOverflow: FC<TextOverflowType> = (props) => {
  const {
    wrapper = 'div',
    maxWidth = 200,
    strict = false,
    text = '',
    length = 20,
  } = props;

  const getStringLen = (str: string, max: number) => {
    let width = 0;
    let length = 0;

    for (let i = 0; i < str.length; i += 1) {
      if ((str.charCodeAt(i) >= 0) && (str.charCodeAt(i) <= 255)) {
        width += 1;
      } else {
        width += 2;
      }
      if (width < max) {
        length += 1;
      }
    }

    return {
      width,
      length,
    };
  };

  const renderText = () => {
    let textValue;
    let isLong;

    if (strict) {
      const lengthAndWidth = getStringLen(text, length);
      isLong = lengthAndWidth.width > length;
      textValue = isLong ? `${text.substr(0, lengthAndWidth.length)}...` : text;
    } else {
      isLong = text.length > length;
      textValue = isLong ? `${text.substr(0, length)}...` : text;
    }

    return { textValue, isLong };
  }

  const { textValue } = renderText();

  return wrapper === 'span' ? (
    <span style={{ maxWidth, overflow: 'hidden', whiteSpace: 'nowrap' }}>
      {textValue}
    </span>
  ) : (
    <div style={{ maxWidth, overflow: 'hidden', whiteSpace: 'nowrap' }}>
      {textValue}
    </div>
  );
};

TextOverflow.displayName = 'TextOverflow';

export default withError(TextOverflow);
