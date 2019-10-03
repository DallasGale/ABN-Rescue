/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import IceCreamAnimation from '.'

describe('<IceCreamAnimation />', () => {
  it('renders without crashing', () => {
    const component = render(<IceCreamAnimation />)
    expect(component).toMatchSnapshot()
  })
})
