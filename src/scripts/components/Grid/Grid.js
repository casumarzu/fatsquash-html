import React, { Component, PropTypes } from 'react'
import './Grid.scss'

export default class Grid extends Component {
  render() {
    const {children} = this.props
    return (
      <section className="grid">
        {children}
      </section>
    )
  }
}
