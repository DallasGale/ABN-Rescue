/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Lobster from '.'

describe('<Lobster />', () => {
  it('renders without crashing', () => {
    const component = render(<Lobster />)
    expect(component).toMatchSnapshot()
  })
})
