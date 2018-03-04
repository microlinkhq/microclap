import React from 'react'
import ClapButton from 'react-clap-button'
import { Flex, Box } from 'grid-styled'

import Icons from './icons'

const microclap = ({orientation, ...props}) => {
  const flexDirection = orientation === 'vertical' ? 'column' : 'row'

  const wrapperProps = {
    [orientation === 'vertical' ? 'pb' : 'pr']: 3
  }

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection={flexDirection}>
      <Box {...wrapperProps}>
        <ClapButton />
      </Box>
      <Icons {...props} />
    </Flex>
  )
}

microclap.defaultProps = {
  icons: ['twitter', 'facebook'],
  orientation: 'vertical'
}

export default microclap
