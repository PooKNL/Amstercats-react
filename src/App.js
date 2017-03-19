import React, { PureComponent } from 'react'
import CatsContainer from './cats/CatsContainer'
import './App.scss'
import store from './store'

export class App extends PureComponent {
  updateCat(id, update) {

    // Needs to be cleaned to make tests working again.
    this.state = {
      cats
    }
  }

  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    )
  }
}


export default App

// -Below code replaced with children from Index-
// < CatsContainer
// updateCat={ this.updateCat.bind(this) } store={ store } />
