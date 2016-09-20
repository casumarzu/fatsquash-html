import React, { Component, PropTypes } from 'react'
import Content from './layouts/Content'
import {Grid, Col} from 'Components/Grid'

import img from 'Images/programmer-man.png'
import {lorem} from 'Data'

export default class Hero extends Component {
  render() {
    return (
      <Content>
        <h1>Hero</h1>
        <Grid>
          <Col grid={12} size={4}>
            <img src={img}/>
          </Col>
          <Col grid={12} size={8}>
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
