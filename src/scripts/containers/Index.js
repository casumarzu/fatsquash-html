import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import mui from 'material-ui'
import Circle from 'Components/svg/Circle'
import {log} from 'Mixin'
import {decorate} from 'react-mixin'

@decorate(log)
export default class App extends Component {
  constructor(props) {
    super(props)
    this.group('Group #1', 'log', 1, 2, 3)
    this.group('Info #2', 'info', 1, 2, 3)
    this.group('Group #3', 'log', 1, 2, 3)
    this.group('Error #4', 'error', 1, 2, 3)
  }
  render() {
    return (
      <div>
        <Circle/>
      </div>
    )
  }
}
