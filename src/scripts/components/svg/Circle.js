import React, { Component, PropTypes } from 'react'

const svgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'absolute',
  display: 'block',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)'
}

export default class Circle extends Component {
  render() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 120 120" style={svgStyle}>
        <defs>
          <radialGradient id="radial-gradient">
            <stop offset="10%" stopOpacity="9%" stopColor="red"/>
            <stop offset="100%" stopOpacity="77%" stopColor="purple"/>
          </radialGradient>
          <linearGradient
            id="linear-gradient"
            gradientUnits="userSpaceOnUse"
            x1="1041.6901"
            y1="169.485"
            x2="1383.9301" y2="169.485"
            gradientTransform="matrix(1 0 0 -1 -761.14 398.97)">
            <stop offset="14%" stopColor="#2f343b" stopOpacity="0%"/>
            <stop offset="43%" stopColor="#337082" stopOpacity="41%"/>
            <stop offset="67%" stopColor="#369fb9" stopOpacity="73%"/>
            <stop offset="79%" stopColor="#37b1cf" stopOpacity="85%"/>
          </linearGradient>
        </defs>
        <circle fill="url(#radial-gradient)" cx="60" cy="60" r="50"/>
      </svg>
    )
  }
}
