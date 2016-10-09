import React, { Component, PropTypes } from 'react'
import Content from './layouts/Content'
import {Grid, Col} from 'Components/Grid'
import img from 'Images/programmer-man.png'
import {lorem} from 'Data'

export default class Projects extends Component {
  render() {
    return (
      <Content>
        <h1>Projects</h1>
        <Grid>
          <Col grid={3} size={1}>
            <img src={img}/>
            <h4>Lalala</h4>
            <p>{lorem}</p>
            <hr/>
            <p>{lorem}</p>
          </Col>
          <Col grid={3} size={1}>
            <img src={img}/>
            <h4>Lalala</h4>
            <p>{lorem}</p>
            <hr/>
            <p>{lorem}</p>
          </Col>
          <Col grid={3} size={1}>
            <img src={img}/>
            <h4>Lalala</h4>
            <p>{lorem}</p>
            <hr/>
            <p>{lorem}</p>
          </Col>
        </Grid>
      </Content>
    )
  }
}
