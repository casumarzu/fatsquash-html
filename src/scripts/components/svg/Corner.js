import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { BlueGradient } from './partials'



export default class Corner extends Component {
  render() {
    const {top, left} = this.props
    const wdt = 120
    const hgt = 120
    let cornerStyle = {
      position: 'absolute',
      display: 'block',
      left: 0,
      zIndex: 100,
      width: '100%',
      height: '10%'
    }
    let points

    if(top) {
      cornerStyle.top = 0
      left ? points = "0,0 120,0 0,120" : points = "0,0 120,0 120,120"
    }else {
      cornerStyle.bottom = 0
      left ? points = "120,0 120,120 0,120" : points = "0,0 120,120 0,120"
    }
    const id = _.uniqueId()
    const name = `blue-gradient-${id}`

    return (
      <svg
        style={cornerStyle}
        width="100%"
        preserveAspectRatio="none"
        viewBox={`0 0 ${wdt} ${hgt}`}>
        <defs>
          <BlueGradient name={name} />
        </defs>
        <polygon
          preserveAspectRatio="none"
          fill={`url(#${name})`}
          points={points} />
      </svg>
    )
  }
}

// fill="url(#odd-linear-gradient)"
