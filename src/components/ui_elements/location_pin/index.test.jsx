/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import LocationPin from '.'

describe('<LocationPin />', () => {
  it('renders without crashing', () => {
    const component = render(<LocationPin />)
    expect(component).toMatchSnapshot()
  })
})
