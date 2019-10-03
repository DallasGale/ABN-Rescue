/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Disclaimer from '.'


const props = {
  copy: '',
  sourceName: '',
  sourceLink: '',
}

describe('<Disclaimer />', () => {
  it('renders without crashing', () => {
    const component = render(<Disclaimer {...props} />)
    expect(component).toMatchSnapshot()
  })
})
