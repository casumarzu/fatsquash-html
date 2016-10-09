import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import _ from 'lodash'
import './Header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sandwichToggle: false
    }
  }

  sandwichToggle() {
    const {sandwichToggle} = this.state
    this.setState({
      sandwichToggle: !sandwichToggle
    })
  }

  onLinkClick() {
    this.setState({
      sandwichToggle: false
    })
  }

  render() {
    const {sandwichToggle} = this.state
    let sandwichShow = ''
    let menuShow = ''
    if(sandwichToggle) {
      sandwichShow = 'b-sandwich__active'
      menuShow = 'b-header__active'
    }
    return (
      <header className={`b-header ${menuShow}`}>
        <section
          className={`b-sandwich ${sandwichShow}`}
          onClick={::this.sandwichToggle}>
          <div className="b-sandwich__stripe b-sandwich__stripe__1"></div>
          <div className="b-sandwich__stripe b-sandwich__stripe__2"></div>
          <div className="b-sandwich__stripe b-sandwich__stripe__3"></div>
        </section>
        <section className="b-header__inner">
          <Link to="/index" activeClassName="__active" onClick={::this.onLinkClick}>Главная</Link>
          <Link to="/about" activeClassName="__active" onClick={::this.onLinkClick}>О нас</Link>
          <Link to="/contacts" activeClassName="__active" onClick={::this.onLinkClick}>Контакты</Link>
        </section>
      </header>
    )
  }
}
