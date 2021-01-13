import * as React from 'react'
import LocaleContext from './LocaleContext'

export default () => {
  const config = React.useContext(LocaleContext)

  return config
}
