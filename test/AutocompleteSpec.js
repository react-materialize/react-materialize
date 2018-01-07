/* global describe, it, expect, context, before */

import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Autocomplete from '../src/Autocomplete'

const data = {
  Apple: null,
  Microsoft: null,
  Google: 'http://placehold.it/250x250'
}

const componentId = 'testAutocompleteId'
const wrapper = shallow(
  <Autocomplete title="Test Title" data={data} id={componentId} />
)

describe('<Autocomplete />', () => {
  const typedKey = 'A'

  it('renders', () => {
    expect(wrapper.find('.autocomplete')).to.have.length(1)
  })

  it('generates correct ID for input and label', () => {
    expect(wrapper.find('.autocomplete').props()).to.have.property(
      'id',
      componentId
    )
    expect(wrapper.find('label').props()).to.have.property(
      'htmlFor',
      componentId
    )
  })

  context('on input change', () => {
    before(() => {
      wrapper
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } })
    })

    it('renders a dropdown', () => {
      expect(wrapper.find('.autocomplete-content')).to.have.length(1)
    })

    it("highlight's results", () => {
      expect(wrapper.find('.highlight').text()).to.equal(typedKey)
    })
  })

  context('on dropdown select', () => {
    const expectedValue = 'Apple'

    before(() => {
      wrapper
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } })
      wrapper.find('ul li').simulate('click')
    })

    it('updates the state with the new value', () => {
      expect(wrapper.state('value')).to.equal(expectedValue)
    })

    it('adds clicked value to input', () => {
      expect(wrapper.find('.autocomplete').prop('value')).to.equal(
        expectedValue
      )
    })
  })

  context('on controlled input', () => {
    const expectedValue = 'Apple'

    const props = {
      onChange: sinon.spy(),
      onAutocomplete: sinon.spy()
    }

    const wrapper2 = shallow(
      <Autocomplete title="Test Title" data={data} value="" {...props} />
    )

    before(() => {
      wrapper2
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } })
    })

    it('updates the state with the new value', () => {
      expect(wrapper2.state('value')).to.equal(typedKey)
    })

    it('calls only onChange callback', () => {
      expect(props.onChange.calledOnce).to.be.true
      expect(props.onChange.args[0][1]).to.equal(typedKey)
      expect(props.onAutocomplete.notCalled).to.be.true
    })

    it('works after value change', () => {
      wrapper2.setProps({
        ...props,
        value: typedKey
      })
      expect(wrapper2.state('value')).to.equal(typedKey)
      expect(props.onChange.calledOnce).to.be.true
      expect(props.onAutocomplete.notCalled).to.be.true
    })

    it('adds clicked value to input', () => {
      wrapper2.find('ul li').simulate('click')

      expect(wrapper2.find('.autocomplete').prop('value')).to.equal(
        expectedValue
      )
    })

    it('calls callbacks after autocomplete', () => {
      expect(props.onChange.calledTwice).to.be.true
      expect(props.onChange.args[1][1]).to.equal(expectedValue)
      expect(props.onAutocomplete.calledOnce).to.be.true
      expect(props.onAutocomplete.calledWith(expectedValue)).to.be.true
    })

    it('clears input', () => {
      wrapper2.setProps({
        ...props,
        value: ''
      })
      expect(wrapper2.state('value')).to.equal('')
      expect(props.onChange.calledTwice).to.be.true
      expect(props.onAutocomplete.calledOnce).to.be.true
    })
  })
})
