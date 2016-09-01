import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import mui from 'material-ui'
import Circle from 'Components/svg/Circle'

export default class App extends Component {
  componentWillMount() {
    console.log('Fatsquash yeah!') // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <h1>Главная</h1>
      </div>
    )
  }
}
