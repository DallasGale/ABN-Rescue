/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import LastYearsAbns from '.'

const props = {
  numberOfAbns: 1000,
  triggerElement: '#the_problem',
  duration: 8000,
}

describe('<LastYearsAbns />', () => {
  it('renders without crashing', () => {
    const component = render(<LastYearsAbns {...props} />)
    expect(component).toMatchSnapshot()
  })
})
