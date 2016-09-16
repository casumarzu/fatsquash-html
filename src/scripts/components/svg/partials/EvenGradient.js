import React, { Component } from 'react'

export default class OddGradient extends Component {
  render() {
    return (
      <linearGradient id="odd-linear-gradient">
        <stop offset="0%" stopColor="#d09f9f" stopOpacity="50%"/>
        <stop offset="100%" stopColor="#000000" stopOpacity="50%"/>
      </linearGradient>
    )
  }
}
