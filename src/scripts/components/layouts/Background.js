import React, { Component, PropTypes } from 'react'
import './Background.scss'
import bgVideo from 'File/bgVideo.mp4'


export default class Background extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="b-background">
        <video width="100%" height="100%" muted loop autoPlay>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="b-background__pattern"></section>
      </section>
    )
  }
}
