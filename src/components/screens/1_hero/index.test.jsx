/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Hero from '.'

describe('<Hero />', () => {
  it('renders without crashing', () => {
    const component = render(<Hero />)
    expect(component).toMatchSnapshot()
  })
})
