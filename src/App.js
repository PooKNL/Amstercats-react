import React from 'react'
import Title from './components/Title'

class App extends React.Component {
  render() {
    return (
      <div className="title-wrapper">
        <Title content= "Welcome to Amstercats!" />
        <Title content= "Take a look at our cats" />
      </div>
    )
  }
}

export default App
