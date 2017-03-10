import React, { PureComponent } from 'react'
import CatsContainer from './cats/CatsContainer'

class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      cats: cats
    }
  }



  render() {
    const { recipes } = this.state

    return (
      <div className="title-wrapper">
        < CatsContainer cats={ cats } />
      </div>
    )
  }
}

const cats = [
  {
    _id: 'abcd123',
    name: 'Wally',
    summary: 'Our lovely little furball.',
    age: '6 months',
    breed: 'Ragdoll',
    liked: false,
  },
  {
      _id: 'abcd124',
    name: 'Art',
    summary: 'Q and Yores lovely little furball.',
    age: '5 years',
    breed: 'European shorthair',
    liked: false,
  },
  {
    _id: 'abcd125',
    name: 'Baas',
    summary: 'Flip and Vrooms first lovely little furball.',
    age: '2 years',
    breed: 'Something',
    liked: false,
  },
  {
    _id: 'abcd126',
    name: 'Barney',
    summary: 'Flip and Vrooms second lovely little furball.',
    age: '1 year',
    breed: 'Something',
    liked: false,
  },
]


export default App
