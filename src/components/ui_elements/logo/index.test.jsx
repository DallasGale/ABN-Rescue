/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Logo from '.'

const props = {
  logoOnClick: () => { },
}

describe('<Logo />', () => {
  it('renders without crashing', () => {
    const component = render(<Logo {...props} />)
    expect(component).toMatchSnapshot()
  })
})
