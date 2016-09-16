import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import {decorate} from 'react-mixin'
import {log} from 'Mixin'
import {lorem} from 'Data'
import {DepositeCalc} from 'Components/DepositeCalc'
import Background from 'Components/layouts/Background'
const title = 'Hello its FatSquash Team!'
import {CornerTop, CornerBottom} from 'Components/svg'
import Content from 'Components/Content'
import bg1 from 'Images/bg-1.jpg'
import bg2 from 'Images/bg-2.jpg'
import bg3 from 'Images/bg-3.jpg'

@decorate(log)
export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const contentNode = (
      <div>
        <h1>{title}</h1>
        <p>{lorem}</p>
        <hr/>
        <h3>{title}</h3>
        <p>{lorem}</p>
      </div>
    )
    return (
      <section className="b-container">
        <Content>
          {contentNode}
        </Content>
        <Content
          backgroundImage={bg2}
          header={<CornerTop/>}
          footer={<CornerBottom/>}>
          {contentNode}
        </Content>
        <Content>
          {contentNode}
        </Content>
        <Content
          backgroundImage={bg3}
          header={<CornerTop/>}
          footer={<CornerBottom/>}>
          {contentNode}
        </Content>
        <Content>
          {contentNode}
        </Content>
        <Content
          backgroundImage={bg1}
          header={<CornerTop/>}>
          {contentNode}
        </Content>
      </section>
    )
  }
}
