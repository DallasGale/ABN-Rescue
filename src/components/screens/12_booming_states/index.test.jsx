/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import BoomingStates from '.'

const props = {
  state: 'VIC',
}

describe('<BoomingStates />', () => {
  it('renders without crashing', () => {
    const component = render(<BoomingStates {...props} />)
    expect(component).toMatchSnapshot()
  })
})
