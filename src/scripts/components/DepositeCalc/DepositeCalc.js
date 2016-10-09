import React, { Component, PropTypes } from 'react'
import './DepositeCalc.css'
import {Calc} from './utils'

export default class DepositeCalc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sum: 0,
      percent: 0,
      time: 0,
      result: 0
    }
  }

  onSumChange(event) {
    const {value} = event.target
    this.setState({sum: value})
  }

  onPercentChange(event) {
    const {value} = event.target
    this.setState({percent: value})
  }

  onTimeChange(event) {
    const {value} = event.target
    this.setState({time: value})
  }

  calcResult() {
    const {sum, percent, time} = this.state
    this.setState({
      result: Calc(+sum, +percent, +time)
    })
  }

  render() {
    const {result} = this.state
    return (
      <section className="b-deposite-calc">
        <header>
          <h2>Входные данные:</h2>
          <hr/>
          <label>
            <p>Сумма:</p>
            <input onChange={::this.onSumChange} type="text"/>
          </label>
          <label>
            <p>Процент:</p>
            <input onChange={::this.onPercentChange} type="text"/>
          </label>
          <label>
            <p>Срок (лет)</p>
            <input onChange={::this.onTimeChange} type="text"/>
          </label>
          <br/>
          <section>
            <button onClick={::this.calcResult}>Показать результат!</button>
          </section>
        </header>
        <footer>
          <h2>Результат</h2>
          <hr/>
          <p>{result}</p>
        </footer>

      </section>
    )
  }
}
