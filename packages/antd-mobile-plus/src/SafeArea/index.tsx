import { FC } from 'react'
import { NativeProps, withNativeProps } from './utils'
import React from 'react'
import classNames from 'classnames'
import './index.less'

const classPrefix = 'alita-safe-area'

export type SafeAreaProps = {
  position: 'top' | 'bottom'
} & NativeProps

const SafeArea: FC<SafeAreaProps> = props => {
  const { position = 'bottom' } = props;
  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${position}`
      )}
    />
  )
}

export default SafeArea;