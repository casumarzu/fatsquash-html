import React, { Component, PropTypes } from 'react'
import './Background.css'


export default class Background extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {src, poster} = this.props
    return (
      <section className="b-background">
        <video width="100%" height="100%" muted loop autoPlay poster={poster}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="b-background__pattern"></section>
      </section>
    )
  }
}
