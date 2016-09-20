import React, { Component, PropTypes } from 'react'
import {paintIsoscelesTriange} from '../utils'
import {
  LinearGradient,
  RadialGradient,
  svgStyle
} from './partials'

const wdt = 120
const hgt = 120
const points = paintIsoscelesTriange(120, 120)

export default class Triangle extends Component {
  render() {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${wdt} ${hgt}`}
        style={svgStyle}>
        <defs>
          <RadialGradient />
        </defs>
        <polygon fill="url(#radial-gradient)" points={points} />
      </svg>
    )
  }
}
