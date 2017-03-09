import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CatItem from './CatItem'

chai.use(chaiEnzyme)

const cat = {
  name: 'Wally',
  summary: 'Our lovely little furball.',
  age: '6 months',
  breed: 'Ragdoll'
}

describe('<CatItem />', () => {
  const container = shallow( <CatItem { ...cat } /> )

  it('is wrapped in an article tag with class name "cat"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('cat')
  })

  it('contains a title', () => {
    expect(container.find('h1')).to.have.text(cat.name)
  })
})
