/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import OverToYou from '.'

describe('<OverToYou />', () => {
  it('renders without crashing', () => {
    const component = render(<OverToYou />)
    expect(component).toMatchSnapshot()
  })
})
