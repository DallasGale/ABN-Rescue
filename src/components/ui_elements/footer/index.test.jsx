/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Footer from '.'

const props = {
}

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const component = render(<Footer {...props}><div>children</div></Footer>)
    expect(component).toMatchSnapshot()
  })
})
