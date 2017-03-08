import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import CatsContainer from './cats/CatsContainer'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains the CatsContainer', () => {
    expect(app).to.have.descendants(CatsContainer)
  })
})
