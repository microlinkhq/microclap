import React from 'react'
import {storiesOf} from '@storybook/react'
import centered from '@storybook/addon-centered'

import Clap, {socialNetworks} from '../src'
import {description as message} from '../package.json'

const MicroClap = props => <Clap
  socialNetworks={socialNetworks}
  message={message}
  link='https://microlink.io/clap'
  icons={['twitter', 'facebook', 'xing']}
  {...props}
/>

storiesOf('orientation', module)
  .addDecorator(centered)
  .addWithJSX('vertical', () => (
    <MicroClap

    />
  ))
  .addWithJSX('horizontal', () => (
    <MicroClap
      orientation='horizontal'
    />
  ))

storiesOf('style', module)
  .addDecorator(centered)
  .addWithJSX('simple', () => (
    <MicroClap
      simple
    />
  ))
  .addWithJSX('solidcircle big', () => (
    <MicroClap
      solidcircle
      big
    />
  ))
  .addWithJSX('solidcircle medium', () => (
    <MicroClap
      link='https://microlink.io/clap'
      solidcircle
      medium
    />
  ))
  .addWithJSX('solidcircle small', () => (
    <MicroClap
      link='https://microlink.io/clap'
      solidcircle
      small
    />
  ))
  .addWithJSX('circle big', () => (
    <MicroClap
      link='https://microlink.io/clap'
      circle
      big
    />
  ))
  .addWithJSX('circle medium', () => (
    <MicroClap
      link='https://microlink.io/clap'
      circle
      medium
    />
  ))
  .addWithJSX('circle small', () => (
    <MicroClap
      link='https://microlink.io/clap'
      circle
      small
    />
  ))
  .addWithJSX('solid big', () => (
    <MicroClap
      link='https://microlink.io/clap'
      solid
      big
    />
  ))
  .addWithJSX('solid medium', () => (
    <MicroClap
      link='https://microlink.io/clap'
      solid
      medium
    />
  ))
  .addWithJSX('solid small', () => (
    <MicroClap
      link='https://microlink.io/clap'
      solid
      small
    />
  ))
