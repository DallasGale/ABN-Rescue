/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import IceCream from '.'

describe('<IceCream />', () => {
  it('renders without crashing', () => {
    const component = render(<IceCream />)
    expect(component).toMatchSnapshot()
  })
})
