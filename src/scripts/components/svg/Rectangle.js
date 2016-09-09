import React, { Component, PropTypes } from 'react'
import {
  LinearGradient,
  RadialGradient,
  OpacityAnimation,
  svgStyle
} from './partials'

export default class Circle extends Component {
  render() {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        style={svgStyle}>
        <defs>
          <RadialGradient />
        </defs>
        <rect
          fill="url(#radial-gradient)"
          x="40"
          y="40"
          height="40"
          width="40">
          <OpacityAnimation />
        </rect>
      </svg>
    )
  }
}
