import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../SafeArea/utils'
import { attachPropertiesToComponent } from './toComponent'
import './index.less'

const prefixCls = 'alita-badge'

export const dot = <React.Fragment />

export type BadgeProps = {
  content?: React.ReactNode | typeof dot
  color?: string
  bordered?: boolean
  children?: React.ReactNode
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
} & NativeProps<'--right' | '--top' | '--color'>

const Badge: FC<BadgeProps> = props => {
  const { content, color, children } = props

  const isDot = content === dot

  const badgeCls = classNames(
    prefixCls,
    !!children && `${prefixCls}-fixed`,
    isDot && `${prefixCls}-dot`,
    props.bordered && `${prefixCls}-bordered`
  )

  const element =
    content || content === 0
      ? withNativeProps(
          props,
          <div
            className={badgeCls}
            style={
              {
                '--color': color,
              } as BadgeProps['style']
            }
          >
            {!isDot && (
              <div className={`${prefixCls}-content`}>{content}</div>
            )}
          </div>
        )
      : null

  return children ? (
    <div
      className={classNames(`${prefixCls}-wrapper`, props.wrapperClassName)}
      style={props.wrapperStyle}
    >
      {children}
      {element}
    </div>
  ) : (
    element
  )
}

export default attachPropertiesToComponent(Badge, { dot })
