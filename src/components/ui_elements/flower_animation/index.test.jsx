/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import FlowerAnimation from '.'

describe('<FlowerAnimation />', () => {
  it('renders without crashing', () => {
    const component = render(<FlowerAnimation />)
    expect(component).toMatchSnapshot()
  })
})
