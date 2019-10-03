/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Aerospace from '.'

describe('<Aerospace />', () => {
  it('renders without crashing', () => {
    const component = render(<Aerospace />)
    expect(component).toMatchSnapshot()
  })
})
