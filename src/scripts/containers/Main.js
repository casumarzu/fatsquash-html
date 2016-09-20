import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import {decorate} from 'react-mixin'
import {log} from 'Mixin'
import {lorem} from 'Data'

import Hero from 'Components/Hero'
import About from 'Components/About'
import Projects from 'Components/Projects'
import Contacts from 'Components/Contacts'

@decorate(log)
export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="b-container">
        <Hero/>
        <About/>
        <Projects/>
        <Contacts/>
      </section>
    )
  }
}
