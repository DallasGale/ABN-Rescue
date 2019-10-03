/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import LobsterAnimation from '.'

describe('<LobsterAnimation />', () => {
  it('renders without crashing', () => {
    const component = render(<LobsterAnimation />)
    expect(component).toMatchSnapshot()
  })
})
