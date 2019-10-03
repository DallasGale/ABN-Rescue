/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import CameraLensAnimation from '.'

describe('<CameraLensAnimation />', () => {
  it('renders without crashing', () => {
    const component = render(<CameraLensAnimation />)
    expect(component).toMatchSnapshot()
  })
})
