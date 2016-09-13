import React, { Component } from 'react'
import DevTools from 'Containers/DevTools'
import { RouteTransition } from 'react-router-transition'
import { spring } from 'react-motion'
const popConfig = { stiffness: 320, damping: 45 }

import 'Scripts/config'
import Background from 'Components/layouts/Background'
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
        <Background/>
        <Header/>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{
            scale: 0.8,
            opacity: 0
          }}
          atLeave={{
            scale: spring(0.8, popConfig),
            opacity: spring(0, popConfig)
          }}
          atActive={{
            scale: spring(1, popConfig),
            opacity: 1
          }}
          mapStyles={ styles => ({
            opacity: styles.opacity,
            transform: `scale(${styles.scale})`
          })}>
          {this.props.children}
        </RouteTransition>
        <Footer/>
        {DevToolsNode}
      </section>
    )
  }
}
