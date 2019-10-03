/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Investigation from '.'

describe('<Investigation />', () => {
  it('renders without crashing', () => {
    const component = render(<Investigation />)
    expect(component).toMatchSnapshot()
  })
})
