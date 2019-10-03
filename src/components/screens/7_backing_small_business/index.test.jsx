/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import BackingSmallBusiness from '.'



describe('<BackingSmallBusiness />', () => {
  it('renders without crashing', () => {
    const component = render(<BackingSmallBusiness duration={5000} />)
    expect(component).toMatchSnapshot()
  })
})
