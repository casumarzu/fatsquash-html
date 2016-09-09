import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import _ from 'lodash'
import './Header.scss'

export default class HeaderLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <Link to="/index" activeClassName="__active">Главная</Link>
        <Link to="/about" activeClassName="__active">О нас</Link>
        <Link to="/contacts" activeClassName="__active">Контакты</Link>
      </header>
    )
  }
}
