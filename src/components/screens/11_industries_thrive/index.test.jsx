/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import IndustriesThrive from '.'

describe('<IndustriesThrive />', () => {
  it('renders without crashing', () => {
    const component = render(<IndustriesThrive />)
    expect(component).toMatchSnapshot()
  })
})
