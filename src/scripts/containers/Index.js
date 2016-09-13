import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import mui from 'material-ui'
import {decorate} from 'react-mixin'
import {log} from 'Mixin'
import {lorem} from 'Data'
const title = 'Hello its FatSquash Team!'

@decorate(log)
export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="b-content">
        <section className="b-content__inner">
          <h1>{title}</h1>
          <p>{lorem}</p>
          <hr/>
          <p>{lorem}</p>
          <h1>{title}</h1>
          <p>{lorem}</p>
          <hr/>
          <p>{lorem}</p>
          <hr/>
          <p>{lorem}</p>
        </section>
      </section>

    )
  }
}
