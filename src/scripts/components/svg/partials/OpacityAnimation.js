import React, { Component } from 'react'

export default class OpacityAnimation extends Component {
  render() {
    return (
      <animate
        attributeName="opacity"
        attributeType="XML"
        values="0.5;1;0.5;"
        begin="0s"
        dur="2s"
        fill="freeze"
        repeatCount="indefinite"
      />
    )
  }
}
