import _ from 'lodash'

export default function calc(sum, percent, time) {
  let result = sum
  let percentByPeriod = percent
  for(let i = 0; i < time; i++) {
    let onePercent = result / 100
    result += onePercent * percentByPeriod
  }
  return result
}
