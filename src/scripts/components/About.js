import React, { Component, PropTypes } from 'react'
import Content from './layouts/Content'
import {Grid, Col} from 'Components/Grid'

import img from 'Images/programmer-man.png'
import {lorem} from 'Data'

export default class About extends Component {
  render() {
    return (
      <Content>
        <h1>About</h1>
        <Grid>
          <Col grid={3} size={2}>
            <img src={img}/>
          </Col>
          <Col grid={3} size={1}>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
          </Col>
        </Grid>
      </Content>
    )
  }
}
