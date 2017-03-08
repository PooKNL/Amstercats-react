import React from 'react'
import CatsContainer from './cats/CatsContainer'

class App extends React.Component {
  render() {
    return (
      <div className="title-wrapper">
        < CatsContainer cats={ [] } />
      </div>
    )
  }
}

export default App
