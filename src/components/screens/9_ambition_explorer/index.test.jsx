/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import AmbitionExplorer from '.'

const mockApi = {
  suburbs: [
    {
      postcode: '3777',
      name: 'Sydney City',
      cancelledAbns: '20784',
    },
    {
      postcode: '3778',
      name: 'Surry Hills',
      cancelledAbns: '3567',
    },
    {
      postcode: '3779',
      name: 'Paramatta',
      cancelledAbns: '1835',
    },
    {
      postcode: '3780',
      name: 'Vaucluse',
      cancelledAbns: '1020',
    },
    {
      postcode: '3781',
      name: 'Darling Point',
      cancelledAbns: '924',
    },
    {
      postcode: '3782',
      name: 'Wollahara',
      cancelledAbns: '584',
    },
  ],
}

const props = {
  apiData: mockApi,
  postcodeOnChange: () => { },
  ctaOnClick: () => { },
  ctaLabel: 'button label',
  ctaLink: '/link',
  value: 'value',
  postcodeFieldRef: React.createRef(),
  errorMsg: [],
}

describe('<AmbitionExplorer />', () => {
  it('renders without crashing', () => {
    const component = render(<AmbitionExplorer {...props} />)
    expect(component).toMatchSnapshot()
  })
})
