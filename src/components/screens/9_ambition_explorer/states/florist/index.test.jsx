/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Florist from '.'

describe('<Florist />', () => {
  it('renders without crashing', () => {
    const component = render(<Florist />)
    expect(component).toMatchSnapshot()
  })
})
