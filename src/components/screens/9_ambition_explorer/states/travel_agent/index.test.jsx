/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import TravelAgent from '.'

describe('<TravelAgent />', () => {
  it('renders without crashing', () => {
    const component = render(<TravelAgent />)
    expect(component).toMatchSnapshot()
  })
})
