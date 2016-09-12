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
        <circle fill="url(#radial-gradient)" cx="60" cy="60" r="20" />
      </svg>
    )
  }
}
