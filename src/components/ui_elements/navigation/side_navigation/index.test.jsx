/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import SideNavigation from '.'

const props = {
  sideNav: [
    { label: 'test', link: 'test', isActive: false },
    { label: 'test', link: 'test', isActive: false },
    { label: 'test', link: 'test', isActive: false },
    { label: 'test', link: 'test', isActive: false },
  ],
  isActive: false,
  onClickTheProblemSideNav: () => { },
  onClickTheSolutionSideNav: () => { },
  onClickAmbitionExplorerSideNav: () => { },
  onClickGrantApplicationSideNav: () => { },
}

describe('<SideNavigation />', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<SideNavigation {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
