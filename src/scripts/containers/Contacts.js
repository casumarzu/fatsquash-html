import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import {lorem} from 'Data'
const title = 'Contacts'

export default class Contacts extends Component {
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
