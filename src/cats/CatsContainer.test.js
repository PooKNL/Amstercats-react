import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CatsContainer from './CatsContainer'

chai.use(chaiEnzyme)

describe('<CatsContainer />', () => {
  const container = shallow(<CatsContainer cats={[]} />)

  it('is wrapped in a div with className "cats"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('cats')
  })
})
