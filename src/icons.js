import SocialButtons from 'react-social-sharing'
import {createElement} from 'react'
import styled from 'styled-components'

const getId = icon => icon.toLowerCase()

// TODO: make possible extend `react-social-sharing`
const createIcon = iconComponent => styled(iconComponent)`
margin: 0;
`

const Icons = Object.keys(SocialButtons).reduce((acc, icon) => ({
  [getId(icon)]: createIcon(SocialButtons[icon]),
  ...acc
}), {})

export default ({icons, ...props}) => icons.map(icon => {
  const iconComponent = Icons[getId(icon)]
  const iconProps = { key: icon, ...props }
  return createElement(iconComponent, iconProps)
})
