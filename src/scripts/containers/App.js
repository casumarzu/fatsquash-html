import React, { Component } from 'react'
import DevTools from 'Containers/DevTools'
import { RouteTransition } from 'react-router-transition'
import { spring } from 'react-motion'
const popConfig = { stiffness: 320, damping: 45 }

import 'Scripts/config'
import Header from 'Components/layouts/Header'
import Footer from 'Components/layouts/Footer'
import 'Styles/index.scss'

export default class App extends Component {
  componentWillMount() {}

  render() {
    let DevToolsNode = ''
    if(process.env.NODE_ENV === 'development' && !window.devToolsExtension) {
      DevToolsNode = <DevTools />
    }

    return (
      <section className="b-wrapper">
        {/*<Header/>*/}
        {this.props.children}
        {/*<Footer/>*/}
        {DevToolsNode}
      </section>
    )
  }
}
