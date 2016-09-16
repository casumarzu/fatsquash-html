import React, { Component, PropTypes } from 'react'
import {
  OddGradient
} from './partials'

const cornerStyle = {
  position: 'absolute',
  display: 'block',
  bottom: 0,
  left: 0,
  zIndex: 100,
  width: '100%',
  height: '150px'
}

const wdt = 120
const hgt = 120
const points = "120,0 120,120 0,120"

export default class CornerOdd extends Component {
  render() {
    return (
      <svg
        style={cornerStyle}
        width="100%"
        preserveAspectRatio="none"
        viewBox={`0 0 ${wdt} ${hgt}`}>
        <defs>
          <linearGradient id="corner-bottom-linear-gradient">
            <stop offset="0%" stopColor="#fafffa" stopOpacity="50%"/>
            <stop offset="100%" stopColor="#9bfaff" stopOpacity="50%"/>
          </linearGradient>
        </defs>
        <polygon
          preserveAspectRatio="none"
          fill="url(#corner-bottom-linear-gradient)"
          points={points} />
      </svg>
    )
  }
}
