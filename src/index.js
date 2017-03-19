import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App'
import CatsContainer from './cats/CatsContainer'
import CatPage from './cats/CatPage'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CatsContainer} />
        <Route path="/cats/:catId" component={CatPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
