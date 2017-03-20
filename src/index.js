import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import App from './App'
import CatsContainer from './cats/CatsContainer'
import CatPage from './cats/CatPage'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CatsContainer} />
        <Route path="/cats/:catId" component={CatPage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
