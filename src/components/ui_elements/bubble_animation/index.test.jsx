/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import BubbleAnimation from '.'

describe('<BubbleAnimation />', () => {
  it('renders without crashing', () => {
    const component = render(<BubbleAnimation areBubblesVisible />)
    expect(component).toMatchSnapshot()
  })
})
