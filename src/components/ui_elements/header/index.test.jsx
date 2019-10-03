/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Header from '.'

const props = {
  onBurgerClick: () => { },
  onBurgerMobileClick: () => { },
  grantApplicationOnClick: () => { },
  logoOnClick: () => { },
}

describe('<Header />', () => {
  it('renders without crashing', () => {
    const component = render(<Header {...props}><div>children</div></Header>)
    expect(component).toMatchSnapshot()
  })
})
