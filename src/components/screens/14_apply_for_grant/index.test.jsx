/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import ApplyForGrantFork from '.'

describe('<ApplyForGrantFork />', () => {
  it('renders without crashing', () => {
    const component = render(<ApplyForGrantFork />)
    expect(component).toMatchSnapshot()
  })
})
