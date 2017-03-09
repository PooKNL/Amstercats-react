import React, { PureComponent } from 'react'
import CatsContainer from './cats/CatsContainer'

class App extends PureComponent {
  render() {
    return (
      <div className="title-wrapper">
        < CatsContainer cats={ cats } />
      </div>
    )
  }
}

const cats = [
  {
    name: 'Wally',
    summary: 'Our lovely little furball.',
    age: '6 months',
    breed: 'Ragdoll'
  },
  {
    name: 'Art',
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


export default App
