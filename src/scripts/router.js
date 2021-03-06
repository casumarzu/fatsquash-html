import React, { Component } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import App from './containers/App'
import Main from './containers/Main'
import About from './containers/About'
import Contacts from './containers/Contacts'

export default class Routes extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={ history }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main } />
          <Route path="/index" component={ Main } />
          <Route path="/about" component={ About } />
          <Route path="/contacts" component={ Contacts } />
        </Route>
      </Router>
    )
  }
}
