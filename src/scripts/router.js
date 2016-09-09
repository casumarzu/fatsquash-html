import React, { Component } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import App from './containers/App'
import Index from './containers/Index'
import About from './containers/About'
import Contacts from './containers/Contacts'

export default class Routes extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={ history }>
        <Route component={ App }>
          <IndexRoute component={ Index } />
          <Route path="/index" component={ Index } />
          <Route path="/about" component={ About } />
          <Route path="/contacts" component={ Contacts } />
        </Route>
      </Router>
    )
  }
}
