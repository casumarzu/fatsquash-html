import React, { Component, PropTypes } from 'react'
import { OddGradient } from './partials'

const height = '150px'
let cornerStyle = {
  position: 'absolute',
  display: 'block',
  left: 0,
  zIndex: 100,
  width: '100%',
  height,
  top: 0
}

const wdt = 120
const hgt = 120
const points = "120,0 120,120 0,120"

export default class Corner extends Component {
  render() {
    const {position} = this.props
    if(position === true) {
      cornerStyle.top = 0
    }else if(position === false) {
      cornerStyle.top = '100%'
    }
    return (
      <svg
        style={cornerStyle}
        width="100%"
        preserveAspectRatio="none"
        viewBox={`0 0 ${wdt} ${hgt}`}>
        <defs>
          <OddGradient />
        </defs>
        <polygon
          preserveAspectRatio="none"
          fill="#9bfaff"
          points={points} />
      </svg>
    )
  }
}

// fill="url(#odd-linear-gradient)"
