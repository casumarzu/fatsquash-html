import React, { Component, PropTypes } from 'react'
import Background from 'Components/layouts/Background'
import './Hero.css'
import video from 'File/video-moscow.mp4'

import Content from './layouts/Content'
import {Grid, Col} from 'Components/Grid'

import img from 'Images/programmer-man.png'
import {lorem} from 'Data'

export default class Hero extends Component {
  render() {
    return (
      <div className="b-hero">
        <Background src={video} />
        <Content>
          <h1>Hero</h1>
          <Grid>
            <Col grid={3} size={1}>
              <h3>Hello!</h3>
              <p>{lorem}</p>
              <hr/>
              <p>{lorem}</p>
            </Col>
            <Col grid={3} size={1}>
              <h3>Hello!</h3>
              <p>{lorem}</p>
              <hr/>
              <p>{lorem}</p>
            </Col>
            <Col grid={3} size={1}>
              <h3>Hello!</h3>
              <p>{lorem}</p>
              <hr/>
              <p>{lorem}</p>
            </Col>
          </Grid>
        </Content>
      </div>

    )
  }
}
