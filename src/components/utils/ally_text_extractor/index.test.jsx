/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import AllyTextExtractor from '.'

// import MockSplitTextComponent from './__mocks__/split_text'


// * Props
const props = {
  Element: "h1",
  text: "Sample text",
}



describe('<AllyTextExtractor />', () => {
  it('renders without crashing', () => {
    const component = render(<AllyTextExtractor {...props} />)
    expect(component).toMatchSnapshot()
  })


})
