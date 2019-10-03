/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import SherlockAnimation from '.'

describe('<SherlockAnimation />', () => {
  it('renders without crashing', () => {
    const component = render(<SherlockAnimation />)
    expect(component).toMatchSnapshot()
  })
})
