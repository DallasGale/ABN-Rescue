/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import IgniteYourAmbition from '.'

describe('<IgniteYourAmbition />', () => {
  it('renders without crashing', () => {
    const component = render(<IgniteYourAmbition />)
    expect(component).toMatchSnapshot()
  })
})
