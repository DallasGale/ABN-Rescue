/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Mattress from '.'

describe('<Mattress />', () => {
  it('renders without crashing', () => {
    const component = render(<Mattress />)
    expect(component).toMatchSnapshot()
  })
})
