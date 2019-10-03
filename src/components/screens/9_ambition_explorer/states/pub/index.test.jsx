/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Pub from '.'

describe('<Pub />', () => {
  it('renders without crashing', () => {
    const component = render(<Pub />)
    expect(component).toMatchSnapshot()
  })
})
