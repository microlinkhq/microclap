import React from 'react'
import {storiesOf} from '@storybook/react'
import centered from '@storybook/addon-centered'

import MicroClap from '../src'

storiesOf('MicroClap/orientation', module)
  .addDecorator(centered)
  .addWithJSX('vertical', () => <MicroClap />)
  .addWithJSX('horizontal', () => <MicroClap orientation='horizontal' />)

storiesOf('MicroClap/style', module)
  .addDecorator(centered)
  .addWithJSX('simple', () => <MicroClap simple />)
  .addWithJSX('solidcircle big', () => <MicroClap solidcircle big />)
  .addWithJSX('solidcircle medium', () => <MicroClap solidcircle medium />)
  .addWithJSX('solidcircle small', () => <MicroClap solidcircle small />)
  .addWithJSX('circle big', () => <MicroClap circle big />)
  .addWithJSX('circle medium', () => <MicroClap circle medium />)
  .addWithJSX('circle small', () => <MicroClap circle small />)
  .addWithJSX('solid big', () => <MicroClap solid big />)
  .addWithJSX('solid medium', () => <MicroClap solid medium />)
  .addWithJSX('solid small', () => <MicroClap solid small />)
