/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import AverageMarker from '.'

const props = {
  cancelledAverage: '1000',
}

describe('<AverageMarker />', () => {
  it('renders without crashing', () => {
    const component = render(<AverageMarker {...props} />)
    expect(component).toMatchSnapshot()
  })
})
