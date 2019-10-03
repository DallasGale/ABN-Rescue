/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import EditLocation from '.'

const props = {
  postcodeValue: '3221',
  handleEditLocation: () => { },
}

describe('<EditLocation />', () => {
  it('renders without crashing', () => {
    const component = render(<EditLocation {...props} />)
    expect(component).toMatchSnapshot()
  })
})
