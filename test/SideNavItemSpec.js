/* global describe, it */

import React from 'react'
import { shallow } from 'enzyme'
import { assert } from 'chai'
import SideNavItem from '../src/SideNavItem'
import UserView from '../src/UserView'

function setup(props = {}, children) {
  const propsIn = {
    ...props
  }
  const component = <SideNavItem {...propsIn}>{children}</SideNavItem>
  const wrapper = shallow(component)
  const firstChild = wrapper.childAt(0)
  const propsOut = wrapper.props()
  return {
    propsIn,
    wrapper,
    firstChild,
    propsOut
  }
}

describe('<SideNavItem />', () => {
  it('should render', () => {
    const { wrapper, firstChild } = setup()
    assert(wrapper.length === 1, 'should render the wrapper')
    assert(firstChild.type() === 'a', 'should render the link')
    assert.equal(
      firstChild.props().href,
      '#!',
      'should render default link href'
    )
    const icon = firstChild.find('.material-icons')
    assert.equal(icon.length, 0, 'should not render an icon')
  })

  it('should render children', () => {
    const { wrapper } = setup({}, <span className="test-child" />)
    const children = wrapper.find('.test-child')
    assert(children.length === 1, 'should render given children')
  })

  it('should not render children for a userview', () => {
    const { wrapper } = setup(
      { userView: true },
      <span className="test-child" />
    )
    const children = wrapper.find('.test-child')
    assert(children.length === 0, 'should not render given children')
  })

  it('should consume props it uses', () => {
    const { propsOut } = setup({
      id: 'test123',
      divider: true,
      waves: true,
      'data-someProp': 'true'
    })
    assert.isUndefined(propsOut.divider, 'should not transfer the divider prop')
    assert.isUndefined(propsOut.waves, 'should not transfer the waves prop')
    assert.equal(propsOut.id, 'test123', 'should transfer the id prop')
    assert.equal(
      propsOut['data-someProp'],
      'true',
      'should transfer the data-someProp prop'
    )
  })

  it('should render a divider class when needed', () => {
    const { wrapper } = setup({
      divider: true
    })
    assert.isTrue(wrapper.hasClass('divider'), 'should render a divider class')
  })

  it('should render a subheader or a waves-effect class when needed', () => {
    const { firstChild } = setup({
      waves: true,
      subheader: true
    })
    assert.isTrue(
      firstChild.hasClass('subheader'),
      'should render a subheader class'
    )
    assert.isTrue(
      firstChild.hasClass('waves-effect'),
      'should render a waves-effect class'
    )
  })

  it('should render an icon when needed', () => {
    const { firstChild } = setup({
      icon: 'car'
    })
    const icon = firstChild.find('.material-icons')
    assert.isTrue(icon.equals(<i className="material-icons">car</i>))
  })

  it('should render a given href', () => {
    const { firstChild } = setup({
      href: 'www.test.nl'
    })
    assert.equal(
      firstChild.props().href,
      'www.test.nl',
      'should render correct link href'
    )
  })

  it('should render a userview', () => {
    const user = { name: 'test' }
    const { firstChild } = setup({
      userView: true,
      user
    })
    assert(firstChild.equals(<UserView {...user} />))
  })
})
