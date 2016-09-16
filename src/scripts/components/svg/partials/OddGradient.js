import React, { Component } from 'react'

export default class EvenGradient extends Component {
  render() {
    return (
      <linearGradient id="even-linear-gradient">
        <stop offset="0%" stopColor="#fafffa" stopOpacity="50%"/>
        <stop offset="100%" stopColor="#9bfaff" stopOpacity="50%"/>
      </linearGradient>
    )
  }
}

// rgba(250,255,250,1), rgba(155,250,255,1)
