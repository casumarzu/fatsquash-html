import React, { Component } from 'react'

export default class RadialGradient extends Component {
  render() {
    return (
      <radialGradient id="radial-gradient">
        <stop offset="0%" stopOpacity="10%" stopColor="aqua"/>
        <stop offset="50%" stopOpacity="10%" stopColor="#6969ff"/>
        <stop offset="100%" stopOpacity="10%" stopColor="aquamarine"/>
      </radialGradient>
    )
  }
}
