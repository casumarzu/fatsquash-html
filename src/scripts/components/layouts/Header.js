import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import _ from 'lodash'
import {AppBar, Drawer, MenuItem, Divider} from 'material-ui'

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import ContentLink from 'material-ui/svg-icons/content/link'
import ContentCopy from 'material-ui/svg-icons/content/content-copy'
import Download from 'material-ui/svg-icons/file/file-download'
import Delete from 'material-ui/svg-icons/action/delete'
import FontIcon from 'material-ui/FontIcon'

export default class HeaderLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  render() {
    return (
      <header>
        <AppBar
          title="Fat Squash"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem leftIcon={<RemoveRedEye />}>
            <Link to="/" onTouchTap={this.handleClose}>Главная</Link>
          </MenuItem>
          <MenuItem leftIcon={<PersonAdd />}>
            <Link to="/about" onTouchTap={this.handleClose}>О нас</Link>
          </MenuItem>
          <MenuItem leftIcon={<ContentLink />}>
            <Link to="/contacts" onTouchTap={this.handleClose}>Контакты</Link>
          </MenuItem>
          <Divider />
          <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
          <MenuItem primaryText="Download" leftIcon={<Download />} />
          <Divider />
          <MenuItem primaryText="Remove" leftIcon={<Delete />} />



        </Drawer>
      </header>
    )
  }
}
