import React, { PureComponent } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import Navigation from './components/Navigation'
import './App.sass'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'

class App extends PureComponent {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <Navigation />
          <Loading />
          { this.props.children }
          <LoadError />
        </div>
      </MuiThemeProvider>
    )
  }
}


export default App
