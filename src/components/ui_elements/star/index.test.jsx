/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Star from '.'

describe('<Star />', () => {
  it('renders without crashing', () => {
    const component = render(<Star />)
    expect(component).toMatchSnapshot()
  })
})
