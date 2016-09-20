import React, { Component, PropTypes } from 'react'
import './Content.scss'

export default class Content extends Component {
  render() {
    const {footer, children, header, backgroundImage} = this.props
    let style = {}
    if(backgroundImage) {
      style.background = backgroundImage
    }

    let imageNode = null
    if(backgroundImage) {
      imageNode = (
        <section className="b-bg">
          <img src={backgroundImage} />
        </section>
      )
    }

    return (
      <section className="b-content" style={style}>
        {imageNode}
        {header}
        <section className="b-content__inner">
          {children}
        </section>
        {footer}
      </section>
    )
  }
}
