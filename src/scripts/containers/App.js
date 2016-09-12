import React, { Component } from 'react'
import DevTools from 'Containers/DevTools'
// import muiCss from 'material-design-lite/src/material-design-lite'
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import { RouteTransition } from 'react-router-transition'
import { spring } from 'react-motion'
const popConfig = { stiffness: 1000, damping: 50 }

import { muiStyle } from 'Scripts/config'
import Background from 'Components/layouts/Background'
import Header from 'Components/layouts/Header'
import Footer from 'Components/layouts/Footer'
import 'Styles/index.scss'

const muiTheme = getMuiTheme(muiStyle)

export default class App extends Component {
  componentWillMount() {}

  render() {
    let DevToolsNode = ''
    if(process.env.NODE_ENV === 'development' && !window.devToolsExtension) {
      DevToolsNode = <DevTools />
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section className="b-container">
          <section className="b-container__inner">
            <Background/>
            <Header/>
            <section className="b-content">
              <section className="b-content__inner">
                {/*<RouteTransition
                  pathname={this.props.location.pathname}
                  atEnter={{
                    // scale: 0.8,
                    opacity: 0
                  }}
                  atLeave={{
                    // scale: spring(0.8, popConfig),
                    opacity: spring(0, popConfig)
                  }}
                  atActive={{
                    // scale: spring(1, popConfig),
                    opacity: 1
                  }}
                  mapStyles={ styles => ({
                    opacity: styles.opacity,
                    // transform: `scale(${styles.scale})`
                  })}>
                  {this.props.children}
                </RouteTransition>*/}
                {this.props.children}
              </section>
            </section>
            {/*<Footer/>*/}
          </section>
          {DevToolsNode}
        </section>
      </MuiThemeProvider>
    )
  }
}
