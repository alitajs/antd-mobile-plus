import React, { FC, ReactNode, ReactElement, ComponentProps } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../SafeArea/utils'
import Badge from '../Badge/index'
import SafeArea from '../SafeArea'
import { usePropsValue } from './hooks/usePropsValue'
import { traverseReactNode } from './traverse-react-node'
import { attachPropertiesToComponent } from '../Badge/toComponent'
import './index.less'

export type TabBarItemProps = {
  icon?: ReactNode | ((active: boolean) => ReactNode)
  title?: ReactNode | ((active: boolean) => ReactNode)
  badge?: any | string
} & NativeProps

/* istanbul ignore next */
export const TabBarItem: FC<TabBarItemProps> = () => {
  return null
}

export type TabBarProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
  safeArea?: boolean
  children?: React.ReactNode
} & NativeProps

const prefixCls = 'alita-tab-bar';

const TabBar: FC<TabBarProps> = p => {
  
  const props = {...p};
  if(!p.safeArea) {
    props.safeArea = false;
  }

  let firstActiveKey: string | null = null

  const items: ReactElement<ComponentProps<typeof TabBarItem>>[] = []

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    if (index === 0) {
      firstActiveKey = key
    }
    items.push(child)
  })

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return
      props.onChange?.(v)
    },
  })

  return withNativeProps(
    props,
    <div className={prefixCls}>
      <div className={`${prefixCls}-wrap`}>
        {items.map(item => {
          const active = item.key === activeKey

          function renderContent() {
            const iconElement = item.props.icon && (
              <div className={`${prefixCls}-item-icon`}>
                {typeof item.props.icon === 'function'
                  ? item.props.icon(active)
                  : item.props.icon}
              </div>
            )
            const titleElement = item.props.title && (
              <div
                className={classNames(
                  `${prefixCls}-item-title`,
                  Boolean(iconElement) && `${prefixCls}-item-title-with-icon`
                )}
              >
                {typeof item.props.title === 'function'
                  ? item.props.title(active)
                  : item.props.title}
              </div>
            )
            if (iconElement) {
              return (
                <>
                  <Badge
                    content={ item.props.badge && (typeof item.props.badge !== 'string') ? item.props.badge.content : item.props.badge }
                    className={ item.props.badge && (typeof item.props.badge === 'string') ? `${prefixCls}-icon-badge` : ''}
                    style={ item.props.badge && (typeof item.props.badge !== 'string') ? item.props.badge.style : '' }
                  >
                    {iconElement}
                  </Badge>
                  {titleElement}
                </>
              )
            } else if (titleElement) {
              return (
                <Badge
                  // content={item.props.badge}
                  // className={`${prefixCls}-title-badge`}
                  // style={item.props.style}
                  content={ item.props.badge && (typeof item.props.badge !== 'string') ? item.props.badge.content : item.props.badge }
                  className={ item.props.badge && (typeof item.props.badge === 'string') ? `${prefixCls}-title-badge` : ''}
                  style={ item.props.badge && (typeof item.props.badge !== 'string') ? item.props.badge.style : '' }
                >
                  {titleElement}
                </Badge>
              )
            }
            return null
          }

          return withNativeProps(
            item.props,
            <div
              key={item.key}
              onClick={() => {
                const { key } = item
                if (key === undefined || key === null) return
                setActiveKey(key.toString())
              }}
              className={classNames(`${prefixCls}-item`, {
                [`${prefixCls}-item-active`]: active,
              })}
            >
              {renderContent()}
            </div>
          )
        })}
      </div>

      {props.safeArea && <SafeArea position='bottom' />}
    </div>
  )
}

export default attachPropertiesToComponent(TabBar, {
  Item: TabBarItem,
})
