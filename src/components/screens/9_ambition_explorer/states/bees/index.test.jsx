/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Bees from '.'

describe('<Bees />', () => {
  it('renders without crashing', () => {
    const component = render(<Bees />)
    expect(component).toMatchSnapshot()
  })
})
