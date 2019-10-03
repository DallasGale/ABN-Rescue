/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import VictoriaAndSouthAustralia from '.'

describe('<VictoriaAndSouthAustralia />', () => {
  it('renders without crashing', () => {
    const component = render(<VictoriaAndSouthAustralia />)
    expect(component).toMatchSnapshot()
  })
})
