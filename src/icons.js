import SocialButtons from 'react-social-sharing'
import {createElement} from 'react'
import styled from 'styled-components'

const getId = icon => icon.toLowerCase()

const createIcon = iconComponent => styled(iconComponent)`
// YOUR CUSTOM STYLE HERE
`

const Icons = Object.keys(SocialButtons).reduce((acc, icon) => ({
  [getId(icon)]: createIcon(SocialButtons[icon]),
  ...acc
}), {})

export const socialNetworks = Object.keys(Icons)

export default ({socialNetworks: icons, ...props}) => icons.map(icon => {
  const iconComponent = Icons[getId(icon)]
  const iconProps = { key: icon, ...props }
  return createElement(iconComponent, iconProps)
})
