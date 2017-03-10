import chai, { expect } from 'chai'
import cats from './cats'

describe('cats reducer', () => {
  const reducer = cats
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
