/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import AllDots from '.'

describe('<AllDots />', () => {
  it('renders without crashing', () => {
    const component = render(<AllDots />)
    expect(component).toMatchSnapshot()
  })
})
