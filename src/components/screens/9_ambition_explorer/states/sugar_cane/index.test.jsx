/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Queensland from '.'

describe('<Queensland />', () => {
  it('renders without crashing', () => {
    const component = render(<Queensland />)
    expect(component).toMatchSnapshot()
  })
})
