import React, { Component, PropTypes } from 'react'
import './Grid.scss'

export default class Grid extends Component {
  render() {
    const {grid, size, children} = this.props
    const className = `col-${grid} size-${size}`
    return (
      <section className={className}>
        {children}
      </section>
    )
  }
}
