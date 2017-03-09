import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CatsContainer from './CatsContainer'
import CatItem from './CatItem'

chai.use(chaiEnzyme)

const cats = [
  {
    name: 'Wally',
    summary: 'Our lovely little furball.',
    age: '6 months',
    breed: 'Ragdoll'
  },
  {
    name: 'Ard',
    summary: 'Q and Yores lovely little furball.',
    age: '5 years',
    breed: 'European shorthair'
  },
  {
    name: 'Baas',
    summary: 'Flip and Vrooms first lovely little furball.',
    age: '2 years',
    breed: 'Something'
  },
  {
    name: 'Barney',
    summary: 'Flip and Vrooms second lovely little furball.',
    age: '1 year',
    breed: 'Something'
  },
]

describe('<CatsContainer />', () => {
  const container = shallow(<CatsContainer cats={ cats } />)

  it('renders all cats as a CatItem', () => {
    expect(container).to.have.exactly(cats.length).descendants(CatItem)
  })
})
